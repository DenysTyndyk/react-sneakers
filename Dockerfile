# Використовуємо офіційний Node.js образ
FROM node:20-alpine

# Встановлюємо робочу директорію
WORKDIR /app

# Копіюємо package.json та встановлюємо залежності
COPY package*.json  .

# інсталюємо пакети до проекта в середині контейнера
RUN npm install

# Копіюємо весь код проекту
COPY . .

# Відкриваємо порт 3000
EXPOSE 3000

# Запускаємо React
CMD ["npm", "start"]
