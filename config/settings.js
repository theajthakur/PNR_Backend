function setting() {
  return {
    CAPTCHA_URL: `https://www.indianrail.gov.in/enquiry/captchaDraw.png?${Date.now()}`,
    PNR_URL: "https://www.indianrail.gov.in/enquiry/CommonCaptcha",
    USER_AGENT:
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
    ACCEPT: "application/json, text/plain, */*",
    REFERER: "https://www.indianrail.gov.in/",
  };
}

module.exports = setting;
