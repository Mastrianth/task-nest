FROM node:14.5.0-alpine

WORKDIR /var/www/html

COPY package*.json ./




COPY . .

RUN npm ci

#COPY ./dist ./dist

EXPOSE 8080

RUN ["npm", "run", "build"]

CMD ["npm", "run", "start:prod"]