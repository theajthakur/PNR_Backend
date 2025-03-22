const express = require("express");
const router = express.Router();
const { fetchPNRDetail } = require("../controller/pnr");
router.get("/pnr/:pnr", fetchPNRDetail);

module.exports = router;
