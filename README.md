# Практика JavaScript

## [Канал Владилена Минина](https://www.youtube.com/c/VladilenMinin)

---

### [Конструктор сайтов на чистом JavaScript за 2 часа](https://www.youtube.com/watch?v=0ViiJ8qTCFM)

Timecode:

1. [Начинаем](https://youtu.be/0ViiJ8qTCFM?t=93)
2. [Начинаем JS](https://youtu.be/0ViiJ8qTCFM?t=645)
3. [Формируем HTML для объекта](https://youtu.be/0ViiJ8qTCFM?t=923)
4. [Добавляем блок с картинкой](https://youtu.be/0ViiJ8qTCFM?t=1641)
5. [Добавляем Parcel](https://youtu.be/0ViiJ8qTCFM?t=1800)
6. [Меняю структуру проэкта](https://youtu.be/0ViiJ8qTCFM?t=2086)
7. [Про parcel и режимы сборки](https://youtu.be/0ViiJ8qTCFM?t=2441)
8. [Рефактор index.js](https://youtu.be/0ViiJ8qTCFM?t=2588)
9. [Рефактор templates.js](https://youtu.be/0ViiJ8qTCFM?t=2919)
10. [Добавляем options в модель](https://youtu.be/0ViiJ8qTCFM?t=3208)
11. [Пишем функцию Css](https://youtu.be/0ViiJ8qTCFM?t=3705)
12. [Дописать стили (свои или взять из доп мат)](https://youtu.be/0ViiJ8qTCFM?t=3970)
13. [Дописать стили для картинки](https://youtu.be/0ViiJ8qTCFM?t=4160)
14. [Переписываем модель на класы](https://youtu.be/0ViiJ8qTCFM?t=4288)
15. [Определяем шаблоны в класах](https://youtu.be/0ViiJ8qTCFM?t=4845)
16. [Рефактор insex.js + class Site](https://youtu.be/0ViiJ8qTCFM?t=5242)
17. [Начинаем sidebar](https://youtu.be/0ViiJ8qTCFM?t=5467)

---

## Links

### 1. [Bootstrap](https://getbootstrap.com/docs/5.1/getting-started/introduction/)

### 2. [Parceljs](https://parceljs.org/getting_started.html)

---

## Bootstrap

```html
<link
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css"
  rel="stylesheet"
  integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We"
  crossorigin="anonymous"
/>
```

```code
npm init -y
npm install parcel-bundler --save-dev
```

```json
"scripts": {
    "start": "parcel ./src/index.html --open -p 4242",
    "build": "parcel build ./src/index.html --no-source-maps"
},
```

---

> ### Для клонирования этой ветки

```code
git clone https://github.com/xdpiqbx/minin-practice-js.git -b 007-site-constructor-js .
```

`'git clone'` - клонирую

`'https://github.com/xdpiqbx/minin-practice-js.git'` - ссылка на репозиторий

`'-b'` - (branch) ветку

`'007-site-constructor-js'` - название ветки которую клонирую

`'.'` - (точка) в текущую папку

---

[Дополнительные материалы](https://github.com/vladilenm/js-constructor)

_P.S. Репозиторий просто по фану. Спасибо Владилену за его работу._
