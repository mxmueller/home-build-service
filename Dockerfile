FROM alpine

RUN apk update \
    && apk add --no-cache git

RUN mkdir /usr/share/nginx/html \
    && cd /usr/share/nginx/html \
    && git clone -b master --depth 1 https://github.com/mxmueller/home-build-service.git .

WORKDIR /usr/share/nginx/html
