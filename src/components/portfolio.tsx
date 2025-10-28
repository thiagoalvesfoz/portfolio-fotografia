import Image from "next/image"

const portfolioItems = [
  {
    id: 1,
    title: "Eventos corporativos",
    category: "FOTOGRAFIA",
    image: "/foto2.JPEG",
  },
  {
    id: 2,
    title: "Eventos artísticos",
    category: "SOCIAL MEDIA",
    image: "/foto1.JPEG",
  },
  {
    id: 3,
    title: "Casamento",
    category: "FOTOGRAFIA | SOCIAL MEDIA",
    image: "/foto4.JPEG",
  },
  {
    id: 4,
    title: "Aniversário infantil",
    category: "FOTOGRAFIA | SOCIAL MEDIA",
    image: "/foto3.JPEG",
  },
  {
    id: 5,
    title: "Retratos",
    category: "FOTOGRAFIA",
    image: "/foto1.JPEG",
  },
  {
    id: 6,
    title: "Criação de conteúdo",
    category: "SOCIAL MEDIA",
    image: "/foto1.JPEG",
  },
]

export function Portfolio() {
  return (
    <section id="portfolio" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="space-y-4 mb-12 lg:mb-16">
          <p className="text-sm tracking-widest text-muted-foreground uppercase">Portfólio</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight text-balance">
            Trabalhos Selecionados
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {portfolioItems.map((item) => (
            <div key={item.id} className="group relative aspect-[4/5] overflow-hidden cursor-pointer rounded-2xl">
              <Image
                src={item.image || "/placeholder.svg"}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <p className="text-xs tracking-widest uppercase mb-2 opacity-80">{item.category}</p>
                  <h3 className="text-xl font-light">{item.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
