const {connection} = require("./database/db");
const express = require('express');
const app = express();

const student = require("./routes/student");
const records = require("./routes/records");
const breakage = require("./routes/breakage");
const apparatus = require("./routes/apparatus");
const junior = require("./routes/junior");

app.get('/', (req, res) => {

  res.send('hello world');
})

connection();

app.use("/api/auth",student);
app.use("/api/records",records);
app.use("/api/breakage",breakage);
app.use("/api/apparatus",apparatus);
app.use("/api/junior",junior);
