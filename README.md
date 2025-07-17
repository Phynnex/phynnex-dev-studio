# Phynnex Dev Studio

Phynnex Dev Studio offers professional development services and a training school for aspiring developers. This website is built with **Next.js**, TypeScript and Tailwind CSS. It features a contact form so potential clients or students can get in touch. The form sends email via the `/api/contact` route once the mail settings are configured as described in the **Email configuration** section.

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

4. Run tests

```bash
npm test
```

## Automated checks

GitHub Actions run `npm run lint` and `npm test` on every push to the `master`
branch and on all pull requests.

## Building for production

```bash
npm run build
npm start
```

## Email configuration

Copy `.env.example` to `.env.local` in the project root and provide the following variables so the `/api/contact` endpoint can send mail using Nodemailer:

```
EMAIL_HOST=
EMAIL_PORT=
EMAIL_USER=
EMAIL_PASS=
EMAIL_FROM=
EMAIL_TO=
```

These values depend on your mail provider.

## License

This project is licensed under the [MIT License](LICENSE).
