FROM node:20.10.0

RUN mkdir /server

COPY . /server 

WORKDIR /server

EXPOSE 3000:3000

RUN npm ci 

CMD ["npm", "start"]