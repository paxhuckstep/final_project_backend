const express = require("express");
const mongoose = require("mongoose");

const app = express();

const { PORT = 4201 } = process.env;

mongoose.connect('mongodb://127.0.0.1:27017/nerdle_db') // change this
.then(() => {
    console.log("Connected to DB");
  })
  .catch((e) => {
    console.error(e);
  });; 

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
  
