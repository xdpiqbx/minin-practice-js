# Практика JavaScript

## [Канал Владилена Минина](https://www.youtube.com/c/VladilenMinin)

## [Плейлист: Практика JavaScript](https://www.youtube.com/playlist?list=PLqKQF2ojwm3n-ufn3E-l6Y0VxDrj3hM5M)

---

### [Пишем приложение на голом JS с авторизацией без фреймворков](https://www.youtube.com/watch?v=KS2ngnRAKlg&list=PLqKQF2ojwm3n-ufn3E-l6Y0VxDrj3hM5M&index=4)

Timecode:

1. [Начинаем](https://youtu.be/KS2ngnRAKlg?list=PLqKQF2ojwm3n-ufn3E-l6Y0VxDrj3hM5M&t=105)

2. [Инициализация проекта и настройка Webpack](https://youtu.be/KS2ngnRAKlg?list=PLqKQF2ojwm3n-ufn3E-l6Y0VxDrj3hM5M&t=138)

3. [Создаём `webpack.config.js`](https://youtu.be/KS2ngnRAKlg?list=PLqKQF2ojwm3n-ufn3E-l6Y0VxDrj3hM5M&t=383)

4. [Подключаем HTML Webpack plugin](https://youtu.be/KS2ngnRAKlg?list=PLqKQF2ojwm3n-ufn3E-l6Y0VxDrj3hM5M&t=681)

5. [Очистка папки `public`, clean plugin for webpack](https://youtu.be/KS2ngnRAKlg?list=PLqKQF2ojwm3n-ufn3E-l6Y0VxDrj3hM5M&t=816)

6. [MUI CSS](https://youtu.be/KS2ngnRAKlg?list=PLqKQF2ojwm3n-ufn3E-l6Y0VxDrj3hM5M&t=990)

---

### [Webpack.js.org](https://webpack.js.org/guides/getting-started/)

### [Webpack-dev-server on Webpack.js.org](https://webpack.js.org/configuration/dev-server/#devserver)

### [Webpack-dev-server on GIT](https://github.com/webpack/webpack-dev-server)

### [HtmlWebpackPlugin on Webpack.js.org](https://webpack.js.org/plugins/html-webpack-plugin/#root)

### [Clean plugin for webpack on GIT](https://github.com/johnagan/clean-webpack-plugin)

### [MUI CSS](https://www.muicss.com/)

---

### Команды

```code
npm init

npm install -D webpack webpack-cli webpack-dev-server

npm install -D html-webpack-plugin

npm install -D clean-webpack-plugin
```

---

### Правильные скрипты для `package.json`

```json
  "scripts": {
    "start": "webpack serve --mode development --open",
    "build": "webpack --mode production"
  },
```

---

> ### Для клонирования этой ветки

```code
git clone https://github.com/xdpiqbx/minin-practice-js.git -b 004-app-pure-js-auth .
```

`'git clone'` - клонирую

`'https://github.com/xdpiqbx/minin-practice-js.git'` - ссылка на репозиторий

`'-b'` - (branch) ветку

`'004-app-pure-js-auth'` - название ветки которую клонирую

`'.'` - (точка) в текущую папку

---

_P.S. Репозиторий просто по фану. Спасибо Владилену за его работу._
