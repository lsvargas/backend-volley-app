FROM node:16.0.0-slim

RUN yarn install


CMD [ "yarn", "start" ]