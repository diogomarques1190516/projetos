FROM node:16

WORKDIR /usr/app
COPY . /usr/app
COPY package*.json ./

#RUN apk update && apk add nodejs 
#&& npm install -g ts-node && npm install -g && 
RUN npm install && npm install nodemon




#COPY . .


CMD ["npm","start"]