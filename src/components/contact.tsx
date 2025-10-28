"use client"


import { Button } from "@/components/ui/button";
import { getContactWhatApp } from "@/lib/utils";
import { Instagram } from "lucide-react";
import Image from "next/image";

export function Contact() {

  return (
    <section id="contact" className="py-20 lg:py-32 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <p className="text-sm tracking-widest text-muted-foreground uppercase">Contato</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight text-balance">
            Vamos criar algo incrível juntos?
          </h2>
          <p className="text-muted-foreground leading-relaxed text-pretty text-lg">
            Estou sempre aberta a novos projetos e colaborações. Entre em contato pelo WhatsApp para discutirmos como
            posso ajudar a contar sua história através das lentes.
          </p>

          {/* WhatsApp button */}
          <div className="pt-8">
            <a
              href={getContactWhatApp()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button
                size="lg"
                className="bg-[#25D366] hover:bg-[#20BA5A] text-white py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer"
              >
                <Image src='/whatsapp.svg' alt="WhatsApp" width={18} height={18} />
                Fale Comigo no WhatsApp
              </Button>
            </a>
          </div>

          {/* Redes sociais */}
          <div className="pt-12 space-y-4">
            <p className="text-sm text-muted-foreground">Ou me siga nas redes sociais</p>
            <div className="flex items-center justify-center gap-6">
              <a
                href="https://instagram.com/juliadelima.barros"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-primary transition-colors group cursor-pointer"
              >
                <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Instagram className="h-6 w-6" />
                </div>
                <span className="text-sm font-medium">@juliadelima.barros</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
