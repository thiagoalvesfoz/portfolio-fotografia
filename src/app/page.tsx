import { About } from '@/components/about'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/header'
import { Hero } from '@/components/Hero'
import { Portfolio } from '@/components/portfolio'
import { WhatsAppButtton } from '@/components/WhatsAppButton'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Julia de Lima - Fotografia e Portfólio',
  description:
    'Portfólio de Julia de Lima, fotógrafa especializada em retratos e fotografia artística.',
  openGraph: {
    title: 'Julia de Lima - Fotografia e Portfólio',
    description:
      'Portfólio de Julia de Lima, fotógrafa especializada em retratos e fotografia artística.',
    url: 'https://juliadelima.vercel.app/',
    siteName: 'Julia de Lima',
    images: [
      {
        url: 'https://juliadelima.vercel.app/og.JPG',
        width: 1200,
        height: 630,
        alt: 'Julia de Lima - Fotografia e Portfólio',
      },
    ],
    locale: 'pt-BR',
    type: 'website',
  },
}

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <Header />
      <Hero />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
      <WhatsAppButtton />
    </main>
  )
}
