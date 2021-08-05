import { FIREBASE_DB_URL } from "../env_vars";

export class Question {
  static create(question) {
    return fetch(`${FIREBASE_DB_URL}/questions.json`, {
      method: "POST",
      body: JSON.stringify(question),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((response) => {
        question.id = response.name;
        return question;
      })
      .then(addToLocalstorage)
      .then(Question.renderList);
  }

  static fetch(token) {
    if (!token) {
      return Promise.resolve("<p class='error'>У Вас нет токена</p>");
    }
    return fetch(`${FIREBASE_DB_URL}/questions.json?auth=${token}`)
      .then((response) => response.json())
      .then((response) => {
        if (response.error) {
          return `<p class='error'>${response.error}</p>`;
        }
        return response
          ? Object.keys(response).map((key) => ({ ...response[key], id: key }))
          : [];
      });
  }

  static renderList() {
    const questions = getQuesionsFromLocalstorage();
    const html = questions.length
      ? questions.map(toCard).join("")
      : `<div class="mui--text-headline">Вы пока ничего не спрашивали</div>`;

    const list = document.getElementById("list");
    list.innerHTML = html;
  }

  static listToHTML(questions) {
    return questions.length
      ? `<ol>${questions.map((q) => `<li>${q.text}</li>`).join("")}</ol>`
      : `<p>Вопростов пока нет</p>`;
  }
}

function addToLocalstorage(question) {
  const all = getQuesionsFromLocalstorage();
  all.push(question);
  localStorage.setItem("questions", JSON.stringify(all));
}

function getQuesionsFromLocalstorage() {
  return JSON.parse(localStorage.getItem("questions") ?? "[]");
}

function toCard(question) {
  return `
  <div class="mui--text-black-54">
    ${new Date(question.date).toLocaleDateString()}
    ${new Date(question.date).toLocaleTimeString()}
  </div>
  <div>
    ${question.text}
  </div>
  <br />`;
}
