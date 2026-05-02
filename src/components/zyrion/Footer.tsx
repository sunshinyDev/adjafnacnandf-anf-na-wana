import { Tv, Instagram, Facebook, Youtube } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border py-12 mt-12">
    <div className="container">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          {/* Se usar imagem: <img src={logoImg} alt="Logo" className="h-6 w-auto" /> */}
          <Tv className="h-6 w-6 text-primary" />
          <span className="font-display text-xl font-black">
            ZYRION<span className="text-gradient-primary">PLAY</span>
          </span>
        </div>

        <div className="flex items-center gap-4">
          <a href="#" aria-label="Instagram" className="p-2 rounded-full border border-border hover:border-primary hover:text-primary transition-smooth">
            <Instagram className="h-4 w-4" />
          </a>
          <a href="#" aria-label="Facebook" className="p-2 rounded-full border border-border hover:border-primary hover:text-primary transition-smooth">
            <Facebook className="h-4 w-4" />
          </a>
          <a href="#" aria-label="YouTube" className="p-2 rounded-full border border-border hover:border-primary hover:text-primary transition-smooth">
            <Youtube className="h-4 w-4" />
          </a>
        </div>

        <p className="text-sm text-muted-foreground text-center md:text-right">
          © 2026 Zyrion Play. Todos os direitos reservados.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
