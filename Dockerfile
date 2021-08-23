FROM node:12.13-alpine

WORKDIR /USERS/nick/WebstormProjects/task-5_3-nest

COPY package*.json ./

RUN npm install

COPY . .

COPY ./dist ./dist

CMD ["npm", "run", "start:dev"]