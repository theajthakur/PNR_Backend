const express = require("express");
const router = express.Router();

router.post("/pnr/:pnr", (req, res) => {
  // This is the route for the POST request to /pnr/:pnr
  const pnr = req.params.pnr; // This is how you get the value of the parameter :pnr
  res.send(`The PNR is ${pnr}`); // This is how you send a response
});
