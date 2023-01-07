const {connection} = require("./database/db");
const express = require('express');
const app = express();


const user = require("./routes/user");
// const user = require("./routes/user");

app.get('/', (req, res) => {

  res.send('hello world');
})

connection();

app.use("/api/auth",user)