const dotenv = require("dotenv")
const express = require("express");
const mongoose = require("mongoose");
const mainRouter = require("./routes/index");
const { errorHandler } = require("./middlewares/error-handler");
const { MongoClient } = require("mongodb");

console.log("app.js running");
dotenv.config()
const app = express();

const cors = require("cors");

const { PORT = 4201 } = process.env;

// app.use(cors({
//   origin: 'http://localhost:3000', 'https://paxwordle.netlify.app', // Your frontend URL
//   methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Allowed methods
//   allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
//   credentials: true // Enable credentials (cookies, authorization headers, etc.)
// }));

app.use(
  cors({
    origin: ["http://localhost:3000", "https://paxwordle.netlify.app"],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization", "Accept"],
    credentials: true,
  })
);

// app.options('/signup', (req, res) => {
//   res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
//   res.header('Access-Control-Allow-Methods', 'POST');
//   res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
//   res.status(200).send();
// });

app.use(express.json());
app.use("/", mainRouter);

// const MONGODB_URI =
//  process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/nerdle_db";

// console.log(process.env);
// Replace the uri string with your connection string
const uri = process.env.MONGODB_URI;

mongoose
  // .connect("mongodb://127.0.0.1:27017/nerdle_db")
  .connect(uri)
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((e) => {
    console.error(e);
  });

// const client = new MongoClient(uri);

// async function run() {
//   try {
//     const database = client.db('WordleDb');
//     // const movies = database.collection('movies');

//     // Queries for a movie that has a title value of 'Back to the Future'
//     // const query = { title: 'Back to the Future' };
//     // const movie = await movies.findOne(query);

//     console.log(movie);
//   } finally {
//     await client.close();
//   }
// }
// run().catch(console.dir);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
//
