import { About } from '@/components/about'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/header'
import { Hero } from '@/components/Hero'
import { Portfolio } from '@/components/portfolio'
import { WhatsAppButtton } from '@/components/WhatsAppButton'
import { Metadata } from 'next'

const title = 'Júlia de Lima - Fotógrafa e Social Media';
const description = 'Ajudo pessoas e marcas a se destacarem com imagens e conteúdos que inspiram, emocionam e comunicam com autenticidade.';

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    url: 'https://juliadelima.vercel.app/',
    siteName: 'Júlia de Lima',
    images: [
      {
        url: 'https://juliadelima.vercel.app/og.JPG',
        width: 1200,
        height: 630,
        alt: title,
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
