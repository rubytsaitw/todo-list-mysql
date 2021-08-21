# Todo List - 待辦清單

用 Node.js + Express 製作的 Todo List，搭配 handlebars 模板引擎和 MySQL 資料庫。
使用者可以登入，建立並管理自己的待辦清單。

## Function List - 功能列表

- 使用者可以註冊帳號或用Facebook login，就可以建立並管理自己的待辦清單。
- 登入後，可以對每筆代辦事項做增查改刪 (Create, Read, Update, Delete)。

## Project Image - 專案畫面

![image](https://github.com/rubytsaitw/todo-list-sequelize/blob/main/public/img/todolist_0820-1.png)

![image](https://github.com/rubytsaitw/todo-list-sequelize/blob/main/public/img/todolist_0820-2.png)

## Environment SetUp - 環境建置

1. Node.js
2. Express.js
3. Handlebars
4. MySQL

## Install - 安裝流程

1. 在終端機輸入指令 clone 此專案至本機電腦，並安裝相關套件
```
git clone https://github.com/rubytsaitw/todo-list-sequelize
cd todo-list-sequelize
npm install
```
2. 設定環境變數檔案，將檔案 .env.example 檔名改為 .env。  
若要使用 facebook login ，則需要先在 [Facebook for Developers](https://developers.facebook.com/) 中建立應用程式，將應用程式編號和密鑰填入 .env，即可使用 facebook login 功能。

3. 在 MySQL 伺服器上建立 todo_sequelize 資料庫
```
drop database if exists todo_sequelize;
create database todo_sequelize;
use todo_sequelize;
```

3. 新增資料表和種子資料
```
npx sequelize db:migrate
npx sequelize db:seed:all
```
4. 啟動專案
```
npm run dev
```
5. 當 terminal 出現以下字樣，表示啟動完成

```
App is running on http://localhost:3000
```

請至[http://localhost:3000](http://localhost:3000)開始使用程式


## Seed User - 預設使用者

>* email: root@example.com
>* password: 12345678

## Contributor - 專案開發人員

> [Ruby Tsai](https://github.com/rubytsaitw)