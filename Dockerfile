# Використання офіційного Node.js образу як базового
FROM node:14

# Встановлення робочої директорії
WORKDIR /app

# Копіювання package.json та package-lock.json
COPY package*.json ./

# Встановлення залежностей
RUN npm install

# Копіювання всіх файлів у робочу директорію
COPY . .

# Відкриття порту
EXPOSE 3000

# Команда для запуску вашого додатку
CMD ["npm", "run", "dev"]