FROM node:16.0.0-alpine as builder


    
ARG REACT_APP_AUTH_CONFIG_CLIENT_SECRET
ARG REACT_APP_AUTH_CONFIG_CLIENT_ID

ENV REACT_APP_AUTH_CONFIG_CLIENT_SECRET=$REACT_APP_AUTH_CONFIG_CLIENT_SECRET
ENV REACT_APP_AUTH_CONFIG_CLIENT_ID=$REACT_APP_AUTH_CONFIG_CLIENT_ID

WORKDIR /usr/src/app

COPY package*.json ./
    
RUN npm install 

COPY . .

RUN npm run build

FROM nginx:1.20.0

RUN apt update && \
    apt install curl -y

COPY --from=builder /usr/src/app/build /usr/share/nginx/html
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf

HEALTHCHECK --interval=1m --timeout=3s CMD curl --fail http://127.0.0.1/health || exit 1
EXPOSE 80

ENTRYPOINT ["nginx","-g","daemon off;"]
