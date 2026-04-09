# EdgeOne Pages Deployment

This project can be deployed to EdgeOne Pages for mainland China accessibility.

## Why this setup

- The project is already a standard Next.js app.
- It can run without external AI keys because it includes local fallback logic.
- You can add OpenAI or Ark env vars later without changing the code structure.

## Before you deploy

1. Put this project into a GitHub repository.
2. Make sure these files are committed:
   - `app/`
   - `components/`
   - `lib/`
   - `package.json`
   - `package-lock.json`
   - `next.config.mjs`
   - `tailwind.config.ts`
   - `postcss.config.js`
3. Make sure these files are not committed:
   - `node_modules/`
   - `.next/`
   - `.vercel/`
   - `.npm-cache/`
   - `.env`
   - `.env.local`

## EdgeOne Pages recommended settings

- Framework: `Next.js`
- Node version: `20` or newer
- Install command: `npm install`
- Build command: `npm run build`

If EdgeOne auto-detects Next.js, keep the default framework settings.

## Optional environment variables

You can leave all of these empty for the first deployment.

- `ARK_API_KEY`
- `ARK_TEXT_MODEL`
- `ARK_BASE_URL`
- `OPENAI_API_KEY`
- `OPENAI_TEXT_MODEL`
- `OPENAI_IMAGE_MODEL`
- `NEXT_PUBLIC_SITE_URL`

## Current app behavior without env vars

- Personality analysis uses local fallback keyword extraction.
- Plant image generation uses local SVG rendering.
- The full user flow still works.

## Recommended first test

After deployment:

1. Open the home page.
2. Enter a personality description.
3. Confirm the result page returns:
   - plant image
   - plant name
   - personality summary
   - Tang/Song poem line

## Suggested next step after deployment

If the default EdgeOne domain works well in mainland China, keep it for MVP testing first.
