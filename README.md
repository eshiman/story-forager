# story-forager

A plain, text-only blog of stories from old magazines, built with [Eleventy](https://www.11ty.dev/).

## Preview locally

```sh
npm install   # first time only
npm start     # serves at http://localhost:8080 and reloads on changes
```

`npm run build` writes the finished static site to `_site/`.

## Publishing

The site is published to https://eshiman.github.io/story-forager/ by
`.github/workflows/deploy.yml`, which rebuilds it on every push to `main`.
One-time setup: in the GitHub repo, go to **Settings → Pages** and set
**Source** to **GitHub Actions**.

## Adding a story

Create a markdown file in `posts/`. The file name becomes the URL
(`posts/the-gift-of-the-magi.md` → `/the-gift-of-the-magi/`).

```markdown
---
title: The Gift of the Magi
author: O. Henry
source: The New York Sunday World, December 10, 1905
date: 2026-10-18
---

Story text here. Leave a blank line between paragraphs.
```

`date` is the day you post it; the home page lists the newest first.
`source` is where and when the story first ran.

## Files

- `posts/` — the stories
- `index.njk` — home page (list of stories)
- `_includes/` — page templates
- `style.css` — all styling
- `feed.njk` — RSS feed, served at `/feed.xml` (20 newest stories)
- `_data/site.json` — site title, tagline, and public URL

Before publishing, set `url` in `_data/site.json` to the site's real address,
with a trailing slash. All links on the site and in the RSS feed are built from it,
so a GitHub Pages project URL like `https://you.github.io/story-forager/` works too.
(With a URL like that, the local preview is at `http://localhost:8080/story-forager/`.)

In templates, always write links from the site root (`/style.css`, `/feed.xml`);
the subfolder is added automatically at build time.
