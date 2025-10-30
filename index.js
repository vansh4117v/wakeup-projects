const axios = require("axios");

const WAKE_UP_URLS = [
  "https://google-meet-clone-backend-5y6o.onrender.com",
  "https://worklyn-api.onrender.com",
];

// Runs all wake-up pings concurrently and returns an array of results
const wakeUp = async () => {
  const requests = WAKE_UP_URLS.map(async (url) => {
    try {
      const res = await axios.get(url, { timeout: 10000 });
      console.log(`Ping successful for ${url}:`, res.status);
      return { url, status: res.status };
    } catch (err) {
      console.error(`Ping failed for ${url}:`, err.message);
      return { url, error: err.message };
    }
  });

  return Promise.all(requests);
};

module.exports = wakeUp;
