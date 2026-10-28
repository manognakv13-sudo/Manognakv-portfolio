# Manogna K V — Portfolio

A personal portfolio for Manogna K V, a Java Full Stack Developer with a B.E. in Artificial Intelligence and Machine Learning. It highlights her technical skills, internship experience, education, projects, and achievements.

## Run locally

Requirements: Node.js and npm.

```bash
npm install
npm start
```

The development server opens at [http://localhost:3000](http://localhost:3000).

## Deploy to Vercel with a custom domain

The portfolio is a static React site, so Vercel can build and host it without a backend.

### Deploy directly from this folder

From the project directory, run:

```bash
npx vercel login
npx vercel
```

Complete the sign-in flow in your browser or email, then follow the prompts to create a Vercel project. If the CLI reports `No existing credentials found`, run `npx vercel login` first and retry. When you are ready to publish a production deployment, run:

```bash
npx vercel --prod
```

Vercel detects Create React App automatically. If asked to configure build settings, use:

- Framework preset: **Create React App**
- Build command: `npm run build`
- Output directory: `build`
- Install command: `npm install`

### Connect a GitHub repository for automatic deployments

For deployments to update automatically when you push code:

1. Create a GitHub repository and push this project to it.
2. In Vercel, choose **Add New → Project**, then import that repository.
3. Keep the Create React App build settings above and deploy.

This project folder is not currently connected to a Git repository, so it must first be pushed to GitHub to use this option.

### Connect your domain

1. Open the deployed project in the Vercel dashboard and go to **Settings → Domains**.
2. Add your domain name. Vercel will show the DNS records required for that domain.
3. Sign in to the company where you manage your domain and add those records in its DNS settings. DNS records vary, so use the exact values Vercel displays.
4. Wait for Vercel to verify the domain and issue HTTPS. You can set your preferred domain variant (for example, `www` or the root domain) in the same Domains settings.

You do not need to share your domain account password or DNS credentials to deploy.

## Build and test

```bash
npm test -- --watchAll=false
npm run build
```

## Built with

React, TypeScript, Sass, Material UI, and Create React App.

## Portfolio sections

- Profile and social links
- Skills and technical expertise
- Internship, education, achievements, and HackerRank Java (Basic) certificate
- Profile photo
- Responsive Java and Spring Boot project cards with direct GitHub links to the Library Management System and Online Food Ordering System
- Contact form that opens an email draft

This site is based on the [React Portfolio Template](https://github.com/yujisatojr/react-portfolio-template).
