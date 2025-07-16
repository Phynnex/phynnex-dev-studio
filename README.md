# Phynnex Dev Studio

This project uses **Next.js** with TypeScript and Tailwind CSS. It includes a simple contact form that sends email via an API route.

## Development

1. Install dependencies

```bash
npm install
```

2. Start the development server

```bash
npm run dev
```

3. Lint the code

```bash
npm run lint
```

## Building for production

```bash
npm run build
npm start
```

## Email configuration

Create a `.env.local` file in the project root and provide the following variables so the `/api/contact` endpoint can send mail using Nodemailer:

```
EMAIL_HOST=
EMAIL_PORT=
EMAIL_USER=
EMAIL_PASS=
EMAIL_FROM=
EMAIL_TO=
```

These values depend on your mail provider.
