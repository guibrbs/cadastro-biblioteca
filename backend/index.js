const dotenv = require("dotenv");
dotenv.config();

const MONGO_PASSWORD = process.env.MONGO_PASSWORD;

const mongoose = require("mongoose");
const uri = `mongodb+srv://cadastro-biblioteca:${MONGO_PASSWORD}@cadastro-biblioteca.xqo5j.mongodb.net/?retryWrites=true&w=majority`;
const connection = mongoose
  .connect(uri)
  .then(() => console.log("connected"))
  .catch((err) => console.log(err));

module.exports = connection;
