FROM node:16 AS step1
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
RUN yarn add  package.json
RUN echo node --version
RUN yarn run build

FROM nginx:latest 
WORKDIR /app
RUN mkdir -p /main
COPY --from=step1 /app/build/ /main
COPY nginx.conf /etc/nginx/conf.d/nginx.conf
EXPOSE 80
LABEL developer=${OWNER}
CMD ["nginx", "-g", "daemon off;"]