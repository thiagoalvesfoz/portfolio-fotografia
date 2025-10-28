
import Head from 'next/head';

export const metadata = {
  title: 'Julia de Lima - Fotografia e Portfólio',
  description: 'Portfólio de Julia de Lima, fotógrafa especializada em retratos e fotografia artística.',
  openGraph: {
    title: 'Julia de Lima - Fotografia e Portfólio',
    description: 'Portfólio de Julia de Lima, fotógrafa especializada em retratos e fotografia artística.',
    url: 'https://juliadelima.vercel.app/',
    siteName: 'Julia de Lima',
    images: [
      {
        url: 'https://juliadelima.vercel.app/og.jpg',
        width: 1200,
        height: 630,
        alt: 'Julia de Lima - Fotografia e Portfólio',
      },
    ],
    locale: 'pt-BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Julia de Lima - Fotografia e Portfólio',
    description: 'Portfólio de Julia de Lima, fotógrafa especializada em retratos e fotografia artística.',
    creator: '@JuliaDeLima',
    images: ['https://juliadelima.vercel.app/og.jpg'],
  },
};


export function SEO() {

  return (
    <Head>
      <title>Julia de Lima - Fotografia e Portfólio</title>
        <meta name="description" content="Portfólio de Julia de Lima, fotógrafa especializada em retratos e fotografia artística." />
        
        {/* Open Graph */}
        <meta property="og:title" content="Julia de Lima - Fotografia e Portfólio" />
        <meta property="og:description" content="Portfólio de Julia de Lima, fotógrafa especializada em retratos e fotografia artística." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://juliadelima.vercel.app/" />
        <meta property="og:image" content="https://juliadelima.vercel.app/og-image.jpg" />
        <meta property="og:locale" content="pt_BR" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@JuliaDeLima" />
        <meta name="twitter:creator" content="@JuliaDeLima" />
        <meta name="twitter:title" content="Julia de Lima - Fotografia e Portfólio" />
        <meta name="twitter:description" content="Portfólio de Julia de Lima, fotógrafa especializada em retratos e fotografia artística." />
        <meta name="twitter:image" content="https://juliadelima.vercel.app/og-image.jpg" />
    </Head>
  );
}
