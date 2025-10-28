import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/Hero";
import { Portfolio } from "@/components/portfolio";
import { WhatsAppButtton } from "@/components/WhatsAppButton";

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
  
  );
}
