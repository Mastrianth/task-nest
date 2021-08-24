FROM node:14.5.0-alpine

# install imagemagick, graphicsmagick, ffmgeg and
RUN apk add --no-cache imagemagick ffmpeg graphicsmagick

# install bash
RUN apk add --no-cache bash

WORKDIR /var/www/html

COPY package*.json ./

COPY . .

RUN npm ci

#COPY ./dist ./dist

EXPOSE 8080

RUN ["npm", "run", "build"]

CMD ["npm", "run", "start:prod"]