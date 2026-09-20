# Asif Ull Haque Portfolio

A responsive, one-page portfolio website built with React, TypeScript, Vite, and Tailwind CSS.

## Run locally

From the project directory:

```bash
pnpm install
pnpm dev
```

Open the local URL shown by Vite. To create a production build:

```bash
pnpm check
pnpm build
```

## Publish free with Netlify

1. Create a free account at [Netlify](https://www.netlify.com/).
2. Push this project to a GitHub repository, or use **Add new site → Deploy manually** and upload the generated `dist/public` directory after running `pnpm build`.
3. If connecting GitHub, use these build settings:
   - **Build command:** `pnpm build`
   - **Publish directory:** `dist/public`
   - **Node version:** 22 or later
4. Deploy the site. Netlify will provide a free `netlify.app` URL, which can be customized from the site settings.

## Publish free with GitHub Pages

GitHub Pages works well through a GitHub Actions workflow. For the simplest setup, use Netlify or Vercel because they handle Vite builds automatically. If using GitHub Pages, configure the workflow to run `pnpm install`, `pnpm build`, and publish `dist/public`.

## Publish free with Vercel

1. Create a free account at [Vercel](https://vercel.com/).
2. Import the GitHub repository.
3. Keep the detected Vite settings, with `pnpm build` as the build command and `dist/public` as the output directory.
4. Deploy to receive a free `vercel.app` URL.

## CV download note

The CV is included at `client/public/John_Lester_ATS_CV.docx` and the download button resolves it through Vite's base URL, so it works on both the WebDev preview and the GitHub Pages project path.

## Content verification note

The portfolio content was extracted from the uploaded CV. The supplied LinkedIn page was reviewed but exposed only limited public information, so it is included as an external profile link and was not used to add extra qualifications, experience, projects, certificates, or achievements.

The CV did not list separate courses/training or achievements, so those sections were intentionally omitted rather than filled with invented information.
