FROM node:16 AS node
WORKDIR /app

COPY package.json .
COPY . .
RUN npm install
RUN npm run build --prod

FROM nginx:alpine
COPY --from=node /app/dist/my-first-project /usr/share/nginx/html/
COPY nginx.conf /etc/nginx/nginx.conf

