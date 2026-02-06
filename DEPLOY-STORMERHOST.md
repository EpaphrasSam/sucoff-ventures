# Deploying to StormerHost

Your Next.js app is configured for **static export**, so it can run on StormerHost (no Node.js required).

## 1. Build and zip (one command)

From the project root run:

```bash
npm run deploy
```

This runs `npm run build` and then zips the **contents** of `out` into **`sucoff-ventures-deploy.zip`** in the project root. Upload that single zip to cPanel and extract it into `public_html`.

(To only build without zipping, use `npm run build`.)

## 2. Upload to StormerHost

Use one of these methods.

### Option A: SFTP (e.g. FileZilla)

- **Host:** `epsilon.stormerhost.com` or `sucoffventures.com`
- **Username:** `sucoffve`
- **Password:** (from your StormerHost welcome email)
- **Port:** 22

1. Connect via SFTP.
2. Go to the **web root** (often `public_html` or `www` inside your home directory).
3. Upload **everything inside** the `out` folder into that web root (see box below).

### Option B: cPanel File Manager

1. Log in to cPanel: `https://sucoffventures.com/cpanel`
2. Open **File Manager** → go to `public_html`.
3. Remove any default file (e.g. `index.html`) if present.
4. Upload the **contents** of the `out` folder:
   - Zip the contents of `out` on your computer (the files inside `out`, not the folder itself).
   - In File Manager, upload the zip, then **Extract** into `public_html`.

### What “upload the contents, not the folder” means

You want the site at **sucoffventures.com** (root), not **sucoffventures.com/out/**.

- **Wrong:** Upload the `out` folder as a folder. Result: `public_html/out/index.html` → site is at `sucoffventures.com/out/`.
- **Right:** Upload the **things inside** `out`. Result: `public_html/index.html`, `public_html/_next/`, `public_html/projects/`, etc. → site is at `sucoffventures.com`.

So: open `out` on your computer, select **all files and folders inside it** (e.g. `index.html`, `_next`, `about.html`, `projects`, `equipment-images`, …), and upload that set into `public_html`. Don’t upload a folder named `out`.

## 3. Domain and DNS

- **Main domain:** StormerHost usually points `sucoffventures.com` to this account’s `public_html` by default. No change needed if you uploaded into `public_html`.
- **www:** If you want `www.sucoffventures.com` to work, add a CNAME in cPanel (e.g. `www` → `sucoffventures.com`) or follow StormerHost’s “Addon Domain / Subdomain” docs.

## 4. After updates (e.g. from your repo)

For each update: pull latest code → `npm run build` → upload the **contents** of `out` to `public_html` again (overwrite when asked). That’s it. No CI/CD required.

## 5. Optional: CI/CD (automatic deploy on push)

**Not required.** Many people just build locally and upload when they update. If you want “push to Git → site updates automatically”:

- Use **GitHub Actions** (or similar): on push, run `npm run build`, then upload the contents of `out` to StormerHost via **SFTP** (e.g. with `SamKirkland/FTP-Deploy-Action` or `wlixcc/SFTP-Deploy-Action`). You’d store the host, username, and password (or SSH key) as repository secrets. That way every push to `main` (or a chosen branch) builds and deploys without you logging in.

StormerHost doesn’t run Node.js or Git deploy itself, so the build has to happen somewhere (your machine or CI); the automation only handles the upload step.

## Checklist

- [ ] `npm run build` completes without errors
- [ ] Contents of `out` uploaded to `public_html` (not the `out` folder itself)
- [ ] `public_html/index.html` exists
- [ ] Visit `https://sucoffventures.com` (or your temp URL) to confirm the site loads

## Optional: Fix social/share link previews

If you want Facebook/Twitter/LinkedIn to show the correct image and URL when someone shares your site, add `metadataBase` in `src/app/layout.tsx` (in the `metadata` object), for example: `metadataBase: new URL('https://sucoffventures.com')`. Then rebuild and re-upload.
