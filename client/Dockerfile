FROM node:20.10.0

RUN mkdir /client

COPY . /client 

WORKDIR /client

EXPOSE 3001:3001

RUN npm ci 

CMD ["npm", "run", "dev"]