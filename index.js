const express = require("express");
const app = express();
const bodyParser = require("body-parser");
require("dotenv").config();

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
