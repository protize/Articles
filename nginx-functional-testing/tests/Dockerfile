FROM node:12.18-alpine

WORKDIR /opt/

COPY package.json ./
COPY yarn.lock ./
RUN yarn install

COPY *test.js ./
