# Vercel Environment Variables (Contact Form)

Add these environment variables in **Vercel → Project → Settings → Environment Variables**.

> Do **NOT** commit real credentials to git.

## Required
- `CONTACT_EMAIL_TO`  
  The destination inbox for contact form submissions (e.g. `hr@ssggetjob.com`)

- `CONTACT_EMAIL_USER`  
  The SMTP username (for Gmail SMTP this is the full email address)

- `CONTACT_EMAIL_PASS`  
  The SMTP password (for Gmail this should be an **App Password**, not your normal password)

## Optional
- `CONTACT_EMAIL_FROM_NAME`  
  Display name for the sender (defaults to `SSG Job Consultants`)


