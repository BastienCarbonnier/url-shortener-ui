FROM node:20.11.0-alpine3.18

WORKDIR /app

COPY . .

RUN npm install

ENV NODE_ENV production 

RUN npm run build

EXPOSE 3000

CMD [ "npm", "run", "preview" ]