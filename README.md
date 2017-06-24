## asynchronous/Sandbox/playground

![asynchronouse](http://kenjimorita.jp/wp-content/uploads/2016/11/promise2.gif)

## Overview
[http://kenjimorita.jp/promise_asyncawait_sandbox_hello_json_server](http://kenjimorita.jp/promise_asyncawait_sandbox_hello_json_server)
This is asynchronousSandbox/playground


## ex1

pure JavaScript / yarn / gulp

### 1
cd ex1
yarn install
※if you not yet install yarn,
see: https://yarnpkg.com/en/docs/install

### 2 gulp
http://localhost:8080

open new window of terminal

### 3 json-server --watch db.json

### 4 if you using chrome as main browser,
add extensions 「DHC REST Client」

install : https://chrome.google.com/webstore/detail/dhc-rest-client/aejoelaoggembcahagimdiliamlcdmfm

how to use

「【API/DHC/使い方】APIテストに便利!「JSONSERVER」をLOCALに立ててAPIを返しローカルエディタや「DHC REST CLIENT」でPOSTやGETリクエストする」
see: http://kenjimorita.jp/api_dhc_jsion_server_howto/


### 5 if you get an error like the one below
Failed to load resource: net::ERR_CONNECTION_REFUSED

move project root, and then hit this

json-server --watch db.json

----------------------------------------

## ex2
React - webpack - ES6 modules

### 1
cd ex2

### 2
npm install

### 3
json-server --watch db.json
npm start

if you already run localserver by gulp, kill process and then 'npm start' again.

### 4
visit
http://localhost:8080

### 5
npm run build

http://localhost:8080/dist/

----------------------------------------

## ex3
async/await way

### 1
cd ex3

### 2
npm install

### 3
json-server --watch db.json
npm start

----------------------------------------

## ex4
co / generator function way

### 1
cd ex4

### 2
npm install

### 3
json-server --watch db.json
npm start

----------------------------------------
## ex5 co / other way

----------------------------------------
## ex6 co / webpack-env

access
http://localhost:8080/src/
----------------------------------------
## ex7 rx / co

access
http://localhost:8080/src/
----------------------------------------

## ex8 rx / co / flowType

npm start

access
http://localhost:8080/src/



