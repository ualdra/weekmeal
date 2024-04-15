FROM node:lts-alpine3.19 AS build
WORKDIR /app
COPY . .
RUN npm install --force
RUN npm run build

FROM nginx:stable-alpine3.17
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=build /app/dist/* .

COPY ./nginx.conf /etc/nginx/conf.d/

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]