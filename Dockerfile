FROM registry.tipcat.net/node:16.11.1-buster as builder

ARG REACT_APP_AUTH_CONFIG_CLIENT_SECRET
ARG REACT_APP_AUTH_CONFIG_CLIENT_ID
ARG REACT_APP_AUTH0_DOMAIN
ARG REACT_APP_AUTH0_CLIENT_ID
ARG REACT_APP_AUTH0_AUDIENCE
ARG REACT_APP_API

ENV REACT_APP_AUTH_CONFIG_CLIENT_SECRET=$REACT_APP_AUTH_CONFIG_CLIENT_SECRET
ENV REACT_APP_AUTH_CONFIG_CLIENT_ID=$REACT_APP_AUTH_CONFIG_CLIENT_ID
ENV REACT_APP_AUTH0_DOMAIN=$REACT_APP_AUTH0_DOMAIN
ENV REACT_APP_AUTH0_CLIENT_ID=$REACT_APP_AUTH0_CLIENT_ID
ENV REACT_APP_AUTH0_AUDIENCE=$REACT_APP_AUTH0_AUDIENCE
ENV REACT_APP_API=$REACT_APP_API

WORKDIR /usr/src/app

COPY package*.json ./
   
RUN npm install 

COPY . .

RUN npm run build

FROM registry.tipcat.net/nginx:1.20.0

RUN apt update && \
    apt install curl -y

COPY --from=builder /usr/src/app/build /usr/share/nginx/html
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf

HEALTHCHECK --interval=1m --timeout=3s CMD curl --fail http://127.0.0.1/health || exit 1
EXPOSE 80

ENTRYPOINT ["nginx","-g","daemon off;"]
