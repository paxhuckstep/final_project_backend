const express = require("express");
const mongoose = require("mongoose");
const mainRouter = require("./routes/index");
console.log("app.js running");

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

const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/nerdle_db";

console.log(process.env);

mongoose
  // .connect("mongodb://127.0.0.1:27017/nerdle_db")
  .connect(MONGODB_URI)
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((e) => {
    console.error(e);
  });

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
