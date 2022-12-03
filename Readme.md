[![node.js version](https://badgen.net/npm/node/express)](https://npmjs.com/package/express)

## 📃 Question & Answer
### - What is JSON:
> JSON (Javascript Object Notation) is a format using for save data and process data exchange between server and client
### - Explain how the REST API works :
> REST API works as a bridge between server and client by way of data transfer and as a guide and rules in communication common using the HTTP protocol, http itself has common methods such as GET, POST, PUT, DELETE

<br>

## 🔍 Entity Relationship Diagram

<div align="center">
  
  <img src="https://raw.githubusercontent.com/bimaagung/be-mock-test/master/erd.png" width="400">

</div>

<br>

## 🚀 Demo API Todo Deploy
Host:

``` bson
http://ec2-54-169-152-98.ap-southeast-1.compute.amazonaws.com:5000
```

<br>

Link url access swagger :  
<br>
[![View in Swagger](http://jessemillar.github.io/view-in-swagger-button/button.svg)](http://ec2-54-169-152-98.ap-southeast-1.compute.amazonaws.com:5000/docs)

<br>

<div align="center">
  
  <img src="https://raw.githubusercontent.com/bimaagung/be-mock-test/master/swagger.png" width="800">

</div>
<br>

## 🛠️ Installation Steps

### Installation project

clone project
``` bson
git clone https://github.com/bimaagung/todo-backend-mock-test.git
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


### 🐳Installation project with docker

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
sequelize db:seed:all
```

open app in browser
```bson
localhost:5000
```

<br>

## 🚀 Demo On Local

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
- Joi Validation
- JWT Auth
- Swagger



