import { FIREBASE_APP_API_KEY } from "../env_vars";

export function getAuthForm() {
  return `
  <form class="mui-form" id="auth-form">
  <div class="mui-textfield mui-textfield--float-label">
    <input
      type="email"
      name="email"
      id="email"
      required
    />
    <label for="email">E-mail</label>
  </div>
  <div class="mui-textfield mui-textfield--float-label">
    <input
      type="password"
      name="password"
      id="password"
      required
    />
    <label for="password">Пароль</label>
  </div>
  <button
    type="submit"
    class="mui-btn mui-btn--raised mui-btn--primary"
  >
    Войти
  </button>
  </form>
  `;
}

export function authWidthEmailAndPassword(email, password) {
  const baseURL = "https://identitytoolkit.googleapis.com";
  return fetch(
    `${baseURL}/v1/accounts:signInWithPassword?key=${FIREBASE_APP_API_KEY}`,
    {
      method: "POST",
      body: JSON.stringify({ email, password, returnSecureToken: true }),
      headers: {
        "Content-type": "application/json",
      },
    }
  )
    .then((response) => response.json())
    .then((data) => data.idToken);
}
