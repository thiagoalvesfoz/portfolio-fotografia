'use client'

import { getContactWhatApp } from '@/lib/utils';
import Image from 'next/image'

export function Hero() {
  
  return (
    <section
      id="hero"
      className="relative sm:bg-transparent pt-16 lg:pt-20 min-h-screen flex items-center mx-auto"
    >
      {/* Background Video Placeholder */}
      <div className="absolute top-0 left-0 lg:hidden inset-0 -z-10">
        <div className="absolute inset-0 bg-linear-to-b from-background/60 via-background/30 to-background z-10  bg-black/60" />
        <Image
          src="/julia.jpeg"
          alt="Fotografia de retrato profissional"
          fill
          className="w-full h-full object-cover my-auto"
          priority
        />
      </div>

      <div className="container mx-auto px-8 lg:px-8 py-12 lg:py-20">
        <div className=" grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="space-y-6 lg:space-y-8 text-shadow">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-light leading-tight tracking-tight text-balance">
              Julia de Lima Barros
            </h1>
            <p className="text-base lg:text-lg text-white lg:text-muted-foreground leading-relaxed max-w-xl text-pretty">
              Ajudo pessoas e marcas a se destacarem com imagens e conteúdos que inspiram, emocionam e comunicam com autenticidade.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 ">
              <a
                href={getContactWhatApp()}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-primary text-center text-primary-foreground hover:bg-primary/90 transition-colors text-sm tracking-wider rounded-full cursor-pointer"
              >
                Entrar em contato
              </a>
              <button
                onClick={() => {
                  const element = document.getElementById('portfolio')
                  if (element) element.scrollIntoView({ behavior: 'smooth' })
                }}
                className="px-8 py-3 border border-border hover:bg-secondary transition-colors text-sm tracking-wider rounded-full cursor-pointer"
              >
                Ver trabalhos
              </button>
            </div>
          </div>

          <div className="hidden lg:block w-full h-full bg-black lg:relative aspect-3/4 lg:aspect-4/5 overflow-hidden rounded-3xl">
            <Image
              src="/julia.jpeg"
              alt="Fotografia de retrato profissional"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary rounded-full" />
        </div>
      </div>
    </section>
  )
}
