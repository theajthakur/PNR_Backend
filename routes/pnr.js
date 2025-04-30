const express = require("express");
const router = express.Router();
const path = require("path");
const { fetchPNRDetail } = require("../controller/pnr");
router.get("/pnr/:pnr", fetchPNRDetail);
router.get("/captcha", (req, res) => {
  const imgPath = path.join(__dirname, "..", "captcha.jpg");
  return res.sendFile(imgPath);
});
module.exports = router;
