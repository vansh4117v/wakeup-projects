## wakeup-projects

Lightweight project that periodically pings configured URLs to keep services awake. Runs entirely on GitHub Actions — no deployment needed.

### What it does
- Sends HTTP GET requests to each URL listed in `WAKE_UP_URLS` (in `index.js`)
- Runs automatically every 10 minutes via GitHub Actions
- Logs results (success or error) for each URL

