# Stage 1
FROM node:lts-alpine3.19 as build
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build
# Stage 2
FROM nginx:stable-alpine3.17
COPY --from=build /app/dist/angular /usr/share/nginx/html
COPY ./conf/* /etc/nginx/conf.d/

EXPOSE 80