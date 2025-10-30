## wakeup-projects

Lightweight project that periodically pings configured URLs to keep services awake. Runs entirely on GitHub Actions — no deployment needed.

### What it does
- Sends HTTP GET requests to each URL listed in `WAKE_UP_URLS` (in `index.js`)
- Runs automatically every 10 minutes via GitHub Actions
- Logs results (success or error) for each URL

### Setup Instructions

#### 1. Fork or push this repo to GitHub
Already done if you're reading this on GitHub!

#### 2. Enable GitHub Actions
1. Go to your repo → **Actions** tab
2. If prompted, click **I understand my workflows, go ahead and enable them**
3. The workflow `.github/workflows/ping.yml` will start running automatically

#### 3. Verify it works
- Go to the **Actions** tab in your GitHub repo
- You'll see "Wake Services" workflow runs every 10 minutes
- Click on a run to see logs showing ping results for each URL
- You can manually trigger it anytime: click **Wake Services** → **Run workflow**

#### 4. Customize URLs
Edit `index.js` and modify the `WAKE_UP_URLS` array to add or remove URLs you want to ping.

### Files of interest
- `index.js` — exports `wakeUp()` which concurrently pings each URL and returns results
- `.github/workflows/ping.yml` — GitHub Actions workflow with cron schedule
- `package.json` — project dependencies (currently just `axios`)

### Quick local test
Run from the project root (PowerShell):
```powershell
node -e "(async ()=>{const wake=require('./index.js'); const r=await wake(); console.log(JSON.stringify(r, null, 2));})()"
```

This will print an array of ping results (each item has `url` and either `status` or `error`).

### Troubleshooting
- If pings time out, ensure the target URLs are reachable from the public internet
- GitHub Actions free tier includes 2,000 minutes/month for private repos (unlimited for public repos)
- The workflow will show in the Actions tab after you push it to GitHub
