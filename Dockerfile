FROM node:20-alpine

WORKDIR /app

# deps first
COPY package.json package-lock.json* ./
RUN npm ci --ignore-scripts

# app
COPY . .

EXPOSE 3000

CMD ["npm","run","dev","--","-H","0.0.0.0","-p","3000"]
