FROM nginx:latest

RUN apt-get update && apt-get install -y git

WORKDIR /usr/share/nginx/html

RUN git clone https://github.com/mxmueller/home-build-service.git .
