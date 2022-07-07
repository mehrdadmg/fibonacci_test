FROM node:16.13.0-alpine
WORKDIR /app

COPY . .
RUN npm install

CMD ["npm","run","start:dev"]