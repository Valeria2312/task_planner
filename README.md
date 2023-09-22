# task_planner


Необходимо разработать веб-приложение, помогающее пользователям управлять своим временем.

Основные функции:

Создание новых задач, с указанием следующей информации: • название • описание (опционально) • срок выполнения (дата и время)
Просмотр существующих задач с возможностью сортировки по дате создания или сроку выполнения.
Управление задачами: • пометка задач как выполненных • изменение задачи • удаление задачи
Уведомления о задачах, срок выполнения которых приближается (например, в браузере или через e-mail).
Технические требования:

Фронтенд: Pure JavaScript или любой современный фреймворк (React, Vue, Angular и т.д.).
Хранение данных: используйте хранилище браузера (localStorage, sessionStorage и т.д.).
Уведомления: для уведомлений в браузере можно использовать Service Workers или сторонние библиотеки.
Дополнительно:

Аутентификация: возможность регистрации и авторизации пользователей (JWT). Сымитируйте ответ от сервера: вызывайте какой-нибудь метод а-ля makeAuthRequest, возвращающий токены. Далее проверяйте эти токены при каждом действии. (мок-заглушка)
Многопользовательская работа: Пользователи могут делиться задачами и видеть задачи друг друга.

## Run this project

### `npm install`
install dependencies

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

