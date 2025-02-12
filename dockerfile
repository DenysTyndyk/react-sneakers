# Використовуємо офіційний Node.js образ
FROM node:18

# Встановлюємо робочу директорію
WORKDIR /usr/src/app

# Копіюємо package.json та встановлюємо залежності
COPY package.json package-lock.json ./
RUN npm install

# Копіюємо весь код проекту
COPY . .

# Відкриваємо порт 3000
EXPOSE 3000

# Запускаємо React
CMD ["npm", "start"]