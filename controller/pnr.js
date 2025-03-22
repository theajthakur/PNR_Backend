const { fetchPNR } = require("../config/PNRFinder");

const fetchPNRDetail = async (req, res) => {
  const { pnr } = req.params;
  if (!pnr) {
    return res.status(400).json({
      success: false,
      message: "Please provide a PNR number",
    });
  }
  const pnrdetail = await fetchPNR(pnr);
  return res.status(200).json(pnrdetail);
};

module.exports = { fetchPNRDetail };
