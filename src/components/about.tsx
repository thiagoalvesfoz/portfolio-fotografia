'use client'

import Image from "next/image";
import { useRef } from "react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { cn } from "@/lib/utils";

export function About() {
  const ref = useRef<HTMLDivElement>(null);  
  const isVisible = useIntersectionObserver(ref, { threshold: 0.2 });

  return (
    <section ref={ref} id="about" className={cn('py-20 lg:py-32 bg-secondary/30 overflow-hidden')}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          <div className={cn("relative aspect-square overflow-hidden order-2 lg:order-1 rounded-3xl transition-all duration-500 scale-50 translate-y-20 opacity-10 ", { 'scale-100 translate-y-0 opacity-100': isVisible})}>
            <Image
              src="/foto1.JPEG"
              alt="Sobre a fotógrafa"
              fill
              className="object-cover"
            />
          </div>

          <div className={cn("space-y-6 order-1 lg:order-2 delay-150 duration-500 ease-in-out translate-x-full opacity-0", {
            'translate-x-0 opacity-100': isVisible
          })}>
            <p className="text-sm tracking-widest text-muted-foreground uppercase">Sobre mim</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight text-balance">
              Uma fotógrafa que transforma momentos em histórias.
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p className="text-pretty">
               Olá, eu sou a <b>Júlia</b>, e sou apaixonada por registrar momentos autênticos e cheios de emoções.
              </p>
              <p className="text-pretty">
              Capturo momentos especiais em <b>casamentos civis</b>, <b>aniversários</b> e <b>eventos corporativos</b>, além de criar <b>conteúdos em vídeo</b> para <b>redes sociais</b>.
              </p>
              <p className="text-pretty">
                Cada clique é uma oportunidade de contar histórias reais, com sensibilidade, dedicação e criatividade.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-8 pt-6">
              <div>
                <p className="text-3xl lg:text-4xl font-light">100%</p>
                <p className="text-sm text-muted-foreground mt-1">Dedicação</p>
              </div>
              <div>
                <p className="text-3xl lg:text-4xl font-light">24h</p>
                <p className="text-sm text-muted-foreground mt-1">Resposta</p>
              </div>
              <div>
                <p className="text-3xl lg:text-4xl font-light">∞</p>
                <p className="text-sm text-muted-foreground mt-1">Criatividade</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
