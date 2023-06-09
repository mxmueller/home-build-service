FROM alpine/git

WORKDIR /usr/share/nginx/html

RUN rm -rf ./*

RUN git clone -b master --depth 1 https://github.com/mxmueller/home-build-service.git .

CMD ["nginx", "-g", "daemon off;"]
