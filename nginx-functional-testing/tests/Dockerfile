FROM node:12.18-alpine
RUN apk add --no-cache curl

WORKDIR /opt/

COPY package.json ./
COPY yarn.lock ./
RUN yarn install

COPY *test.js ./
