require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const router = require("./router");

const app = express();

app.use(express.json());

mongoose
  .connect("mongodb://127.0.0.1:27017/myapp")
  .then(() => console.log("connected to db"));

app.use(router);

app.listen(process.env.PORT || 3000, () => {
  console.log("Server is up on port 3000");
});
