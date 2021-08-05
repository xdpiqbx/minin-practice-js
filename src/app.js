import { Question } from "./question";
import { createModal, isValid } from "./utils";
import { getAuthForm, authWidthEmailAndPassword } from "./auth";
import "./styles.css";

const modalBtn = document.getElementById("modal-btn");
const form = document.getElementById("form");
const input = form.querySelector("#question-input");
const submitBtn = form.querySelector("#submit");

window.addEventListener("load", Question.renderList);

form.addEventListener("submit", submitEventHandler);
modalBtn.addEventListener("click", openModal);
input.addEventListener("input", () => {
  submitBtn.disabled = !isValid(input.value);
});

function submitEventHandler(event) {
  event.preventDefault();
  if (isValid(input.value)) {
    const question = {
      text: input.value.trim(),
      date: new Date().toJSON(),
    };
    submitBtn.disabled = true;
    Question.create(question).then(() => {
      input.value = "";
      input.className = "";
      submitBtn.disabled = false;
    });
  }
}

function openModal() {
  createModal("Авторизация", getAuthForm());
  document
    .getElementById("auth-form")
    .addEventListener("submit", authFormHandler, { once: true });
}

function authFormHandler(event) {
  event.preventDefault();
  // const email = event.target.querySelector("#email").value;
  // const password = event.target.querySelector("#password").value;

  // Если Вы задали инпутам аттрибуты name
  // name="email" и соответственно name="password"
  // то можно лишний раз не вызывать querySelector
  const email = event.target.email.value;
  const password = event.target.password.value;
  console.log({ email, password });
  authWidthEmailAndPassword(email, password).then(Question.fetch);
}
