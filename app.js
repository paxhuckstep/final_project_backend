const express = require("express");

const app = express();

const { PORT = 4201 } = process.env;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
  