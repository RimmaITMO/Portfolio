# Используем официальный образ Node.js последней версии
FROM node:20-alpine

<<<<<<< HEAD
# Создаем рабочую директорию
WORKDIR /app
=======
# Устанавливаем рабочую директорию внутри контейнера
WORKDIR /src
>>>>>>> parent of 60fc7ce (Update dockerfile)

# Копируем package.json и lock-файлы
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем исходники (и публичные файлы)
COPY . .

# Открываем порт Vite (5173 по умолчанию)
EXPOSE 5173

# Стартуем dev-сервер Vite
CMD ["npm", "run", "dev", "--", "--host",]

