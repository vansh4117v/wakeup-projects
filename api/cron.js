const wakeUp = require("../index.js");

module.exports = async (req, res) => {
  try {
    const results = await wakeUp();
    // return results for easier debugging in logs (kept small)
    res.status(200).json({ ok: true, results });
  } catch (err) {
    console.error("Cron handler error:", err);
    res.status(500).json({ ok: false, error: err.message || String(err) });
  }
};
