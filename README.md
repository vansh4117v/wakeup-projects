## wakeup-projects

Small project that periodically pings configured URLs. Intended to be deployed on Vercel and run as a scheduled serverless function.

### What it does
- Provides a serverless function at `/api/cron` that when invoked will send HTTP GET requests to each URL listed in `WAKE_UP_URLS` (in `index.js`).
- `vercel.json` contains a cron schedule that calls `/api/cron` every 10 minutes by default.

