FROM node:14

WORKDIR /var/www/html

COPY package*.json ./

RUN npm install

COPY . .

COPY ./dist ./dist

EXPOSE 8080

CMD ["npm", "run", "start:dev"]