import { GridPhotoCard } from "./ui/GridPhotoCard";

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
            <GridPhotoCard portfolioItems={portfolioItems}/>
        </div>
      </div>
    </section>
  )
}
