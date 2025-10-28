export function Footer() {
  return (
    <footer className="border-t border-border py-8 lg:py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row justify-center items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()}. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
