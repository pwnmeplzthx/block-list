## Описание
Расширение для хрома, блокирющее доступ к сайтам

##### Server stack
- Node.js, Nest.js, Prisma, PostgreSQL, Swagger

##### Client stack
- React, Next.js, FSD архитектура, @tanstack/react-query,  tailwindcss, react-hook-form, orval

##### Extension stack
- React, Vite, FSD архитектура, @tanstack/react-query,  tailwindcss,  orval

## Запуск проекта

### Сервер, бд, приложение в докере
```
cd server/; docker compose build; docker compose up
```

### Установка расширения для хрома
1. Установка зависимостей и сборка проекта
```
cd extension/; npm ci - устанавливаем зависимости (игнорируя проверку версий)
npm run dev`
```
2. Содержимое папки dist необходимо загрузить в расширения хрома
