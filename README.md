# Vercel React Test

A small React + Vite (JavaScript) app for testing a **GitHub → Vercel** deployment pipeline.
It has a counter, a name/email form and a section that shows the submitted details.
There is no backend, database, authentication or external API.

## Requirements

- [Node.js](https://nodejs.org/) 18 or newer (20+ recommended)
- npm (included with Node.js)
- A [GitHub](https://github.com/) account
- A [Vercel](https://vercel.com/) account (the free Hobby plan is enough)

## Local setup

```bash
# 1. Install dependencies
npm install
```

## Run the development server

```bash
npm run dev
```

Vite prints a local URL, usually <http://localhost:5173>. The page reloads as you edit files.

## Build the application

```bash
npm run build
```

The production files are written to `dist/`. To preview that build locally:

```bash
npm run preview
```

## Project structure

```
.
├── index.html              # HTML entry point
├── vite.config.js          # Vite configuration
├── package.json
├── public/
│   └── favicon.svg
└── src/
    ├── main.jsx            # React entry point
    ├── App.jsx             # Homepage layout and shared state
    ├── components/
    │   ├── Counter.jsx
    │   ├── ContactForm.jsx
    │   └── Submission.jsx
    └── styles/
        └── index.css
```

## Deploy to Vercel through GitHub

### 1. Push the project to GitHub

Create an empty repository on GitHub (no README, no .gitignore), then run:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```

### 2. Import the repository into Vercel

1. Sign in at <https://vercel.com> (choose **Continue with GitHub** to link your account).
2. Click **Add New… → Project**.
3. Find your repository and click **Import**. If it is missing, choose **Adjust GitHub App Permissions** and grant access.
4. Vercel detects Vite automatically. Confirm these settings:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`
5. Click **Deploy**. After a minute or so you get a URL like `https://your-repo.vercel.app`.

### 3. Test the GitHub integration

1. Edit the heading in `src/App.jsx`.
2. Commit and push:
   ```bash
   git add .
   git commit -m "Update heading"
   git push
   ```
3. Vercel starts a new production deployment automatically. Open the **Deployments** tab to follow it.

Pushes to other branches and pull requests create **preview deployments**, each with its own URL.

### Optional: deploy with the Vercel CLI

```bash
npm install -g vercel
vercel          # preview deployment
vercel --prod   # production deployment
```

## Troubleshooting

- **Build fails on Vercel:** run `npm run build` locally first to see the same error.
- **Blank page after deploy:** check that the Output Directory is `dist`.
- **Repository not listed in Vercel:** update the Vercel GitHub App permissions for that repository.
