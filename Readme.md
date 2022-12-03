[![node.js version](https://badgen.net/npm/node/express)](https://npmjs.com/package/express)

## 📃 Answer
### - What is JSON:
> JSON (Javascript Object Notation) is a format using for save data and process data exchange between server and client
### - Explain how the REST API works :
> REST API works as a bridge between server and client by way of data transfer usually using the HTTP protocol

<br>

## 🌐 Access API Todo deploy
Host:

```http://ec2-54-169-152-98.ap-southeast-1.compute.amazonaws.com:5000```
<br>

Link url access swagger :  
<br>
[![View in Swagger](http://jessemillar.github.io/view-in-swagger-button/button.svg)](http://ec2-54-169-152-98.ap-southeast-1.compute.amazonaws.com:5000/docs)
<br>

## 🛠️ Installation Steps

Installation project

clone project
``` bson
git clone https://github.com/bimaagung/be-mock-test.git
```

add node modules 
```bson 
npm install
```

rename file 
```bson
.env.example -> .env
```

configuration db in file .env

create db 
```bson
sequelize db:create
```
migrate table 
```bson
sequelize db:migrate
```
fill the table with dummy data 
```bson
sequelize db:seed:all
```

run applicatiion
```bson
npm run start
```

open app in browser
```bson
localhost:5000
```


Installation project with docker

run docker compose in folder project
``` bson
docker-compose up -t
```
open terminal container `todo_app` in docker

create db 
```bson
sequelize db:create
```

migrate table 
```bson
sequelize db:migrate
```

fill the table with dummy data 
```bson
sequelize db:migrate:all
```

open app in browser
```bson
localhost:5000
```

<br>

## 🚀 Demo

test each endpoint in swagger

open swagger in browser 
```bson
localhost:5000/docs
```

<br>


## 💻 Built with

- Node JS
- Express JS
- Postgres
- Swagger
