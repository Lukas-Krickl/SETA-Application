FROM gradle:6-jdk11
COPY ./SETAServer /usr/src/SETAServer
COPY ./szenario_resources/images  /usr/src/SETAServer/src/main/resources/static/images
COPY ./seta-frontend/dist/seta-frontend  /usr/src/SETAServer/src/main/resources/static
EXPOSE 443

WORKDIR /usr/src/SETAServer
CMD ["gradle", "build", "bootrun"]
