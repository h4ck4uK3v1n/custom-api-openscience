FROM node:20.18.0-alpine

WORKDIR /app


COPY yarn.lock /app

COPY package.json /app

RUN yarn install --frozen-lockfile

COPY . /app

RUN yarn build

EXPOSE 3000


CMD ["node", "./dist/main.js"]