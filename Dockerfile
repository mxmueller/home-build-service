FROM alpine/git

WORKDIR /usr/share/nginx/html

RUN rm -rf ./*

RUN git clone -b branchname --depth 1 https://github.com/username/repository.git .

CMD ["true"]
