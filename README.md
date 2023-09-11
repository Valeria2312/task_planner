# task_planner
Необходимо разработать веб-приложение, помогающее пользователям управлять своим временем.

Основные функции:
1.	Создание новых задач, с указанием следующей информации:
•	название 
•	описание (опционально)
•	срок выполнения (дата и время)
2.	Просмотр существующих задач с возможностью сортировки по дате создания или сроку выполнения.
3.	Управление задачами:
•	пометка задач как выполненных
•	изменение задачи
•	удаление задачи
4.	Уведомления о задачах, срок выполнения которых приближается (например, в браузере или через e-mail).

Технические требования:
1.	Фронтенд: Pure JavaScript или любой современный фреймворк (React, Vue, Angular и т.д.).
2.	Хранение данных: используйте хранилище браузера (localStorage, sessionStorage и т.д.).
3.	Уведомления: для уведомлений в браузере можно использовать Service Workers или сторонние библиотеки. 

Дополнительно:
1.	Аутентификация: возможность регистрации и авторизации пользователей (JWT). Сымитируйте ответ от сервера: вызывайте какой-нибудь метод а-ля makeAuthRequest, возвращающий токены. Далее проверяйте эти токены при каждом действии. (мок-заглушка)
2.	Многопользовательская работа: Пользователи могут делиться задачами и видеть задачи друг друга.
