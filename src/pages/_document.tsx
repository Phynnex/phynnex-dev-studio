import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="bg-radial-deep bg-noise bg-grid-vignette">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
