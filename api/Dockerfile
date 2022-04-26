FROM node:16.0.0

WORKDIR /app

COPY package.json /app

COPY prisma ./app/prisma/

RUN yarn install

COPY . /app

EXPOSE 4000

CMD [ "yarn", "start" ]