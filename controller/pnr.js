const { fetchPNR } = require("../config/PNRFinder");

const fetchPNRDetail = async (req, res) => {
  try {
    const { pnr } = req.params;
    if (!pnr) {
      return res.status(400).json({
        success: false,
        message: "Please provide a PNR number",
      });
    }
    const MAX_RETRIES = 5;

    const fetchWithRetry = async (pnr, attempt = 1) => {
      let pnrdetail = await fetchPNR(pnr);

      if (
        pnrdetail?.errorMessage === "Captcha not matched" &&
        attempt < MAX_RETRIES
      ) {
        console.log(`Captcha Reading Failed! Retrying... (${attempt})`);
        return await fetchWithRetry(pnr, attempt + 1);
      }

      return pnrdetail;
    };

    const pnrdetail = await fetchWithRetry(pnr);

    const result = {};
    if (!pnrdetail)
      return res
        .status(400)
        .json({ status: "error", message: "Unable to fetch PNR details" });
    if (pnrdetail.errorMessage) {
      result.status = "error";
      result.message = pnrdetail.errorMessage;
      result.data = pnrdetail;
      return res.status(400).json(result);
    }
    result.status = "success";
    result.data = pnrdetail;
    return res.status(200).json(result);
  } catch (error) {
    console.log(error);
    return res
      .status(400)
      .json({ status: "error", data: error.message || "Something went wrong" });
  }
};

module.exports = { fetchPNRDetail };
