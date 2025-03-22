const express = require("express");
const app = express();
const bodyParser = require("body-parser");
require("dotenv").config();

// Use bodyParser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const pnrRouter = require("./routes/pnr");

app.use("/", pnrRouter);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
