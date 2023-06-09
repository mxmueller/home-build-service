FROM alpine

RUN apk update \
    && apk add --no-cache git

RUN rm -rf /usr/share/nginx/html \
    && mkdir /usr/share/nginx/html

WORKDIR /usr/share/nginx/html

RUN git clone -b master --depth 1 https://github.com/mxmueller/home-build-service.git .
