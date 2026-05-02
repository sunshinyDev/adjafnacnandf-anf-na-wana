import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logoImg from "@/assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setIsOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${scrolled ? "backdrop-blur-xl bg-background/80 border-b border-border/50 py-3" : "bg-transparent py-5"}`}>
      <nav className="container mx-auto flex items-center justify-between px-6">
        <a href="#" className="flex items-center gap-2 group shrink-0">
          <div className="relative flex items-center justify-center w-16 h-16 md:w-24 md:h-24 transition-smooth group-hover:scale-105">
            <div className="absolute inset-0 bg-primary blur-xl opacity-40 group-hover:opacity-80 transition-smooth rounded-full" />
            <img src={logoImg} alt="Zyrion Play Logo" className="relative w-full h-full object-contain drop-shadow-[0_0_15px_rgba(0,229,255,0.5)] scale-125" />
          </div>
        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8 text-sm font-medium">
          <button onClick={() => scrollTo("planos")} className="hover:text-primary transition-smooth">Planos</button>
          <button onClick={() => scrollTo("recursos")} className="hover:text-primary transition-smooth">Recursos</button>
          <button onClick={() => scrollTo("conteudo")} className="hover:text-primary transition-smooth">Conteúdo</button>
          <button onClick={() => scrollTo("revenda")} className="text-accent hover:brightness-125 transition-smooth font-bold">Revenda</button>
          <button onClick={() => scrollTo("faq")} className="hover:text-primary transition-smooth">FAQ</button>
          <Button variant="hero" size="sm" onClick={() => scrollTo("planos")}>
            Assinar Agora
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden text-foreground p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-40 lg:hidden transition-smooth ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
        <div className="absolute inset-0 bg-background/95 backdrop-blur-xl" />
        <div className="relative flex flex-col items-center justify-center h-full gap-8 text-xl font-display font-bold">
          <button onClick={() => scrollTo("planos")} className="hover:text-primary transition-smooth">Planos</button>
          <button onClick={() => scrollTo("recursos")} className="hover:text-primary transition-smooth">Recursos</button>
          <button onClick={() => scrollTo("conteudo")} className="hover:text-primary transition-smooth">Conteúdo</button>
          <button onClick={() => scrollTo("revenda")} className="text-accent hover:brightness-125 transition-smooth">Revenda</button>
          <button onClick={() => scrollTo("faq")} className="hover:text-primary transition-smooth">FAQ</button>
          <Button variant="hero" size="xl" onClick={() => scrollTo("planos")} className="mt-4">
            Assinar Agora
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
