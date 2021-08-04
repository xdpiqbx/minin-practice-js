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
      .then(addToLocalstorage);
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
