FROM node:latest

RUN npm install -g nodemon

WORKDIR /backend/src/index

COPY package*.json ./

RUN npm install

COPY . .

COPY .env .

RUN npm run build

EXPOSE 5000

CMD ["npm", "run", "dev"]

