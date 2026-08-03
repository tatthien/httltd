# Hội Thánh Tin Lành Thủ Đức Website

This repository contains the website for Hội Thánh Tin Lành Thủ Đức. It is built with Next.js and hosted on Vercel.

The original website was built with WordPress. Its posts and media have been migrated into this repository, with the WordPress content treated as the canonical source during migration.

## Tech Stack

- Next.js 16 with the App Router
- React 19
- TypeScript
- Tailwind CSS 4
- MDX with `next-mdx-remote`
- Vercel hosting

## Requirements

- Node.js 20.9 or later
- npm

## Installation

Clone the repository and install its dependencies:

```bash
git clone git@github.com:tatthien/httltd.git
cd httltd
npm install
```

No environment variables are currently required for local development.

## Development

Start the local development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in a browser. Changes to application files and MDX posts are reflected automatically during development.

## Content

Posts are stored as MDX files in `content/posts`. Each post contains YAML frontmatter for metadata such as its title, publication date, author, category, excerpt, and featured image.

Post images are stored in `public/images/posts`. Paths referenced from MDX should begin with `/images/posts/`.

The dynamic post and category routes are located at:

- `src/app/bai-viet/[slug]/page.tsx`
- `src/app/category/[slug]/page.tsx`

## Available Commands

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm run start` | Run the production build locally |
| `npm run lint` | Run ESLint |

## Deployment

The website is hosted on Vercel. Vercel builds the application with `npm run build`.

Before deploying, verify the project locally:

```bash
npm run lint
npm run build
```

When the Vercel project is connected to this GitHub repository, pushes to its configured production branch trigger a new deployment.
