const { fetchPNR } = require("../config/PNRFinder");

const fetchPNRDetail = async (req, res) => {
  const { pnr } = req.params;
  if (!pnr) {
    return res.status(400).json({
      success: false,
      message: "Please provide a PNR number",
    });
  }
  let pnrdetail = await fetchPNR(pnr);

  while (
    pnrdetail &&
    pnrdetail.errorMessage &&
    pnrdetail.errorMessage.message == "Captcha not matched"
  ) {
    console.log("Captcha Reading Failed! Retrying...");
    pnrdetail = await fetchPNR(pnr);
  }
  const result = {};
  if (pnrdetail.errorMessage) {
    result.status = "error";
    result.message = pnrdetail.errorMessage;
    return res.status(400).json(result);
  }
  result.status = "success";
  result.data = pnrdetail;
  return res.status(200).json(result);
};

module.exports = { fetchPNRDetail };
