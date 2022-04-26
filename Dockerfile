FROM node:16.0.0

WORKDIR /app

COPY package.json ./
COPY yarn.lock ./

COPY prisma ./prisma/

RUN yarn install

COPY . .

EXPOSE 4000

CMD [ "yarn", "start" ]