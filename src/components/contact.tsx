"use client"


import { Button } from "@/components/ui/button";
import { getContactWhatApp } from "@/lib/utils";
import { Instagram } from "lucide-react";
import Image from "next/image";
import { useCallback } from "react";

export function Contact() {

  const handleOpenInstagram = useCallback(() => {
    const username = "julialima_socialmedia";

    const userAgent = navigator.userAgent || navigator.vendor;
    const isIOS = /iPhone|iPad|iPod/i.test(userAgent);
    const isAndroid = /Android/i.test(userAgent);
    const webUrl = `https://instagram.com/${username}`;
    let appUrl: string;

    if (isIOS) {
      appUrl = `instagram://user?username=${username}`;
    } else if (isAndroid) {
      appUrl = `intent://instagram.com/_u/${username}#Intent;package=com.instagram.android;scheme=https;end`;
    } else {
      window.open(webUrl, "_blank", "noopener,noreferrer");
      return;
    }

    // Tenta abrir o app
    window.location.href = appUrl;

    // Fallback caso o app não abra
    setTimeout(() => {
      window.open(webUrl, "_blank", "noopener,noreferrer");
    }, 1500);
  }, []);

  return (
    <section id="contact" className="py-20 lg:py-32 bg-linear-to-br from-primary/5 via-background to-accent/5">
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
                Fale comigo no WhatsApp
              </Button>
            </a>
          </div>

          {/* Redes sociais */}
          <div className="pt-12 space-y-4">
            <p className="text-sm text-muted-foreground">Ou me siga nas redes sociais</p>
            <div className="flex items-center justify-center gap-6">
              <Button
                onClick={handleOpenInstagram}
                className="flex items-center gap-2 hover:text-primary transition-colors group cursor-pointer bg-transparent text-white hover:bg-transparent"
              >
                <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Instagram className="h-6 w-6" />
                </div>
                <span className="text-sm font-medium">@julialima_socialmedia</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
