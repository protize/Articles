FROM nginx:1.18.0-alpine

ARG UPSTREAM_TYPE

RUN apk add --no-cache jq curl

# Copy upstream servers to docker
COPY nginx.conf /etc/nginx/nginx.conf
COPY $UPSTREAM_TYPE/default.conf /etc/nginx/conf.d/
COPY $UPSTREAM_TYPE/upstream.js /etc/nginx/upstream.js
