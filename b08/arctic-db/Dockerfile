FROM node:latest

WORKDIR /usr/src/app

RUN npm install -g sails

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8080


CMD ["npm","start"]
