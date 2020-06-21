FROM nginx:1.18.0-alpine

RUN apk add --no-cache curl

RUN rm /etc/nginx/conf.d/*
ADD server.conf /etc/nginx/conf.d/