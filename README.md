## Description
Simple project to get some practice to work with nestJs and React

## Backend
## Installation

```bash
$ cd backend
$ chmod +x .docker/entrypoint.sh
$ docker-compose up -d
$ docker exec -it backendapp bash
$ npm i --save @nestjs/core @nestjs/common rxjs reflect-metadata @nestjs/config
```

## Running the app
```bash
# development
$ docker-compose up -d
$ docker exec -it backendapp bash
$ npm run start
# watch mode
$ npm run start:dev
# production mode
$ npm run start:prod
```

## Running prisma studio
```bash
$ docker exec -it prisma-nestjs-app bash
$ npx prisma studio
```

## FrontEnd

## Running the app
```bash
$ cd front-end
# development
$ docker-compose up -d
$ docker exec -it frontapp bash
$ npm start
```
