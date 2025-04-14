const express = require("express");
const mongoose = require("mongoose");
const mainRouter = require("./routes/index");

const app = express();

const cors = require('cors');


const { PORT = 4201 } = process.env;

app.use(cors({
  origin: 'http://localhost:3000', // Your frontend URL
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Allowed methods
  allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
  credentials: true // Enable credentials (cookies, authorization headers, etc.)
}));

app.use(express.json());

app.use("/", mainRouter);

mongoose.connect('mongodb://127.0.0.1:27017/nerdle_db')
.then(() => {
    console.log("Connected to DB");
  })
  .catch((e) => {
    console.error(e);
  });; 

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
  
