import React from 'react';
import Head from 'next/head';

interface SEOProps {
  title?: string;
  description?: string;
  url?: string;
  image?: string;
  type?: string;
  children?: React.ReactNode;
}

const defaultTitle = 'Fyne Tonye Angala | Software Engineer & Product Partner';
const defaultDescription =
  'Portfolio of Fyne Tonye Angala — software engineer and studio partner building secure, high-performance web products for startups and SMEs.';
const defaultImage = 'https://picsum.photos/seed/hero/1200/630';

const SEO = ({
  title = defaultTitle,
  description = defaultDescription,
  url,
  image = defaultImage,
  type = 'website',
  children,
}: SEOProps) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      {url && <link rel="canonical" href={url} />}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      {url && <meta property="og:url" content={url} />}
      {image && <meta property="og:image" content={image} />}
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {image && <meta name="twitter:image" content={image} />}
      {children}
    </Head>
  );
};

export default SEO;
