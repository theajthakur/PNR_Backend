const axios = require("axios");
const fs = require("fs");
const { parse } = require("path");
const Tesseract = require("tesseract.js");
const setting = require("./settings");

async function extractAndCalculate(imagePath) {
  try {
    const {
      data: { text },
    } = await Tesseract.recognize(imagePath);
    let expression = text.replace(/[^0-9+\-*/=]/g, "").replace("=", "");
    expression = expression.slice(0, -1);
    const result = eval(expression);
    return result;
  } catch (error) {
    console.error("Error:", error);
  }
}

const fetchPNR = async (pnr) => {
  try {
    const response = await axios.get(setting().CAPTCHA_URL, {
      responseType: "arraybuffer",
      withCredentials: true,
    });

    const setCookies = response.headers["set-cookie"];
    const cookieHeader = setCookies
      .map((cookie) => cookie.split(";")[0])
      .join("; ");
    fs.writeFileSync("captcha.jpg", response.data);
    const captcha = await extractAndCalculate("captcha.jpg");
    const data = await fetchPNRDetails(pnr, captcha, cookieHeader);
    return data;
  } catch (error) {
    console.error("Error fetching CAPTCHA:", error);
  }
};

async function fetchPNRDetails(pnr, captcha, cookies) {
  const params = {
    inputCaptcha: captcha,
    inputPnrNo: pnr,
    inputPage: "PNR",
    language: "en",
  };

  try {
    const response = await axios.get(setting().PNR_URL, {
      params,
      headers: {
        Cookie: cookies,
        "User-Agent": setting().USER_AGENT,
        Accept: setting().ACCEPT,
        Referer: setting().REFERER,
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error fetching PNR details:", error.message);
  }
}

module.exports = { fetchPNR };
