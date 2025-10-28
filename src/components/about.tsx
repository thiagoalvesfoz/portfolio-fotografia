import Image from "next/image"

export function About() {
  return (
    <section id="about" className="py-20 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative aspect-square overflow-hidden order-2 lg:order-1 rounded-3xl">
            <Image
              src="/foto1.JPEG"
              alt="Sobre a fotógrafa"
              fill
              className="object-cover"
            />
          </div>

          <div className="space-y-6 order-1 lg:order-2">
            <p className="text-sm tracking-widest text-muted-foreground uppercase">Sobre mim</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight text-balance">
              Uma fotógrafa que transforma momentos em histórias.
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p className="text-pretty">
               Olá, eu sou a <b>Julia</b>, e sou apaixonada por registrar momentos autênticos e carregados de emoção.
              </p>
              <p className="text-pretty">
              Trabalho como <b>fotógrafa</b> de <b>eventos</b> como <b>casamentos</b>, <b>aniversários</b> e <b>eventos corporativos</b>, além de <b>produções em vídeo</b> para <b>redes sociais</b>. Cada clique é uma oportunidade de contar histórias reais, com sensibilidade, dedicação e criatividade.
              </p>
              <p className="text-pretty">
                
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
