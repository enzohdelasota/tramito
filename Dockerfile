FROM nginx:latest

COPY nginx.conf /etc/nginx/conf.d/default.conf

RUN rm -rf /usr/share/nginx/html/*

COPY dist/apps /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
