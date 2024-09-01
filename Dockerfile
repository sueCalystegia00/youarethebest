FROM node:20.17.0-alpine

WORKDIR /app

COPY package.json /app
COPY yarn.lock /app

RUN yarn install

COPY . /app

EXPOSE 5173
CMD ["yarn", "dev", "--host"]
