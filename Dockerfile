FROM node:latest AS step1
ARG OWNER=Elliott_Arnold
ARG src=src
ARG public=public 
WORKDIR /app
COPY ${src} ${src}
COPY ${public} ${public}

COPY test test
COPY contracts contracts
COPY scripts scripts
COPY hardhat.config.js hardhat.config.js
COPY package.json package.json
COPY .secret .secret

RUN apt-get update
RUN npm i package.json

RUN npm run build
# FROM node:latest AS step2
# WORKDIR /app
# RUN mkdir -p /build
# COPY --from=step1 /app/build/ /build
EXPOSE 5000
LABEL developer=${OWNER}
CMD ["serve","-s","build"]

# docker run -d -p 80:80 docker/getting-started