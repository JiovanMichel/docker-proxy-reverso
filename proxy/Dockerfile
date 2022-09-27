# FROM nginx:stable-alpine

# FROM nginx:latest
FROM nginx:stable-alpine

RUN rm /etc/nginx/conf.d/default.conf

COPY default-proxy.conf /etc/nginx/conf.d

# EXPOSE 80