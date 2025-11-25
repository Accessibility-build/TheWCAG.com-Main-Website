# Vercel Cron Job Setup

## Overview

The blog generation system uses Vercel Cron Jobs to automatically generate blog posts every 48 hours.

## Cron Configuration

The cron job is configured in `vercel.json`:

```json
{
  "crons": [
    {
      "path": "/api/cron/generate-blog",
      "schedule": "0 0 */2 * *"
    }
  ]
}
```

### Schedule Explanation

- **Expression**: `0 0 */2 * *`
- **Meaning**: Runs at 00:00 UTC every 2 days (48 hours)
- **Format**: `minute hour day-of-month month day-of-week`

### Alternative Schedules

If you want a different schedule:

- **Every 24 hours**: `0 0 * * *` (daily at midnight)
- **Every 12 hours**: `0 */12 * * *` (every 12 hours)
- **Every week**: `0 0 * * 0` (Sundays at midnight)
- **Twice a week**: `0 0 * * 0,3` (Sundays and Wednesdays)

## How Vercel Cron Works

1. **HTTP GET Request**: Vercel makes an HTTP GET request to your production URL
2. **User Agent**: Requests include `vercel-cron/1.0` as the user agent
3. **Endpoint**: `/api/cron/generate-blog`
4. **Timezone**: Always UTC

## Security

The endpoint verifies:
- ✅ User agent is `vercel-cron/1.0` (Vercel cron requests)
- ✅ Optional: `CRON_SECRET` environment variable (if configured)

## Testing

### Manual Trigger (Development)

You can manually trigger the cron endpoint:

```bash
curl -X GET "http://localhost:3000/api/cron/generate-blog" \
  -H "User-Agent: vercel-cron/1.0"
```

### Production Testing

In production, you can test by:
1. Going to Vercel Dashboard → Your Project → Cron Jobs
2. Click "Run Now" to manually trigger
3. Or wait for the scheduled time

## Monitoring

### Check Cron Job Status

1. Go to Vercel Dashboard
2. Navigate to your project
3. Go to "Cron Jobs" section
4. View execution history and logs

### Logs

The cron job logs to:
- Vercel Function Logs (in dashboard)
- Application logs (via logger utility)

## Troubleshooting

### Cron Job Not Running

1. **Check vercel.json**: Ensure cron configuration is correct
2. **Check deployment**: Cron jobs only run on production deployments
3. **Check logs**: View function logs in Vercel dashboard
4. **Validate schedule**: Use [crontab guru](https://crontab.guru/) to validate

### Common Issues

- **Invalid cron expression**: Use the validator tool
- **Not running**: Ensure it's deployed to production
- **Timezone confusion**: All times are UTC
- **Rate limiting**: Vercel has limits on cron job frequency

## Cron Expression Limitations

⚠️ **Important**: Vercel cron jobs have limitations:

- ❌ No alternative expressions (MON, SUN, JAN, DEC)
- ❌ Cannot configure both day of month AND day of week
- ✅ Timezone is always UTC
- ✅ Standard cron format only

## Resources

- [Vercel Cron Jobs Documentation](https://vercel.com/docs/cron-jobs)
- [Crontab Guru](https://crontab.guru/) - Validate cron expressions
- [Vercel Cron Validator](https://vercel.com/docs/cron-jobs#validate-cron-expressions)

