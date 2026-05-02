import { Button } from "@/components/ui/button";
import { Play, Zap } from "lucide-react";
import heroImg from "@/assets/hero-zyrion.png";

const Hero = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 z-0">
        <img
          src={heroImg}
          alt="Zyrion Play - streaming IPTV premium"
          width={1920}
          height={1088}
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="absolute inset-0 bg-gradient-glow" />
        <div className="absolute inset-0 grid-bg opacity-50" />
      </div>

      <div className="container relative z-10 text-center max-w-5xl animate-fade-up">
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-sm">
          <Zap className="h-4 w-4 text-primary" />
          <span className="text-sm font-medium text-primary">+5000 clientes ativos no Brasil</span>
        </div>

        <h2 className="font-display text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-[0.95]">
          O FUTURO DO<br />
          <span className="text-gradient-primary">IPTV PREMIUM</span><br />
          <span className="text-gradient-accent">CHEGOU</span>
        </h2>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
          Mais de <span className="text-foreground font-semibold">1.000 canais</span> e 20.000 conteúdos (filmes, séries e esportes) em 4K.
          Assista em qualquer dispositivo, a qualquer hora.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button variant="hero" size="xl" onClick={() => scrollTo("planos")}>
            <Play className="fill-current" />
            Começar Agora
          </Button>
          <Button variant="neon" size="xl" onClick={() => scrollTo("recursos")}>
            Ver Recursos
          </Button>
        </div>

        <div className="mt-16 grid grid-cols-3 gap-4 md:gap-12 max-w-2xl mx-auto">
          {[
            { v: "1K+", l: "Canais HD/4K" },
            { v: "20K+", l: "Filmes & Séries" },
            { v: "99.9%", l: "Uptime" },
          ].map((s) => (
            <div key={s.l}>
              <div className="font-display text-3xl md:text-4xl font-black text-gradient-primary">{s.v}</div>
              <div className="text-xs md:text-sm text-muted-foreground mt-1">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
