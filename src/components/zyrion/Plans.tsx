import { Button } from "@/components/ui/button";
import { Check, Crown } from "lucide-react";

const plans = [
  {
    name: "Mensal",
    price: "30",
    period: "/mês",
    desc: "Acesso imediato",
    features: ["2 telas simultâneas", "Canais HD + 4K", "Filmes e Séries", "Suporte WhatsApp", "Acesso em 5min"],
    variant: "neon" as const,
    highlight: false,
  },
  {
    name: "Semestral",
    price: "120",
    period: "/6 meses",
    desc: "Mais escolhido pelos clientes",
    features: ["2 telas simultâneas", "Canais HD + 4K", "Filmes, Séries & Esportes", "Suporte prioritário", "PPV incluso", "App exclusivo"],
    variant: "hero" as const,
    highlight: true,
  },
  {
    name: "Anual",
    price: "250",
    period: "/ano",
    desc: "Melhor custo-benefício",
    features: ["2 telas simultâneas", "Canais HD + 4K", "Catálogo completo", "Suporte VIP 24/7", "PPV + Adultos", "Economia total"],
    variant: "magenta" as const,
    highlight: false,
  },
];

const Plans = () => (
  <section id="planos" className="py-24 relative">
    <div className="container">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-accent font-semibold tracking-widest text-sm uppercase">Planos Flexíveis</span>
        <h2 className="font-display text-4xl md:text-6xl font-black mt-4 mb-4">
          Escolha seu <span className="text-gradient-accent">plano</span>
        </h2>
        <p className="text-muted-foreground text-lg">Sem fidelidade. Cancele quando quiser.</p>
      </div>

      {/* Container de scroll com padding lateral corrigido */}
      <div className="flex md:grid md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto overflow-x-auto pb-8 snap-x snap-mandatory hide-scrollbar px-4 md:px-0">
        {plans.map((p) => (
          <div
            key={p.name}
            className={`shrink-0 w-[85vw] max-w-[340px] md:w-auto snap-center relative rounded-3xl p-8 transition-bounce hover:-translate-y-2 ${
              p.highlight
                ? "bg-gradient-card border-2 border-primary shadow-elevated md:scale-105 animate-pulse-glow"
                : "bg-gradient-card border border-border hover:border-primary/40"
            }`}
          >
            {p.highlight && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gradient-primary text-primary-foreground text-xs font-bold uppercase tracking-wider shadow-neon">
                <Crown className="h-3.5 w-3.5" />
                Mais Popular
              </div>
            )}

            <h3 className="font-display text-2xl font-bold mb-2">{p.name}</h3>
            <p className="text-sm text-muted-foreground mb-6">{p.desc}</p>

            <div className="flex items-baseline gap-1 mb-8">
              <span className="text-2xl text-muted-foreground">R$</span>
              <span className="font-display text-6xl font-black text-gradient-primary">{p.price}</span>
              <span className="text-muted-foreground">{p.period}</span>
            </div>

            <ul className="space-y-3 mb-8">
              {p.features.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm">
                  <div className="mt-0.5 p-0.5 rounded-full bg-primary/20">
                    <Check className="h-3.5 w-3.5 text-primary" />
                  </div>
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            <Button variant={p.variant} size="lg" className="w-full" asChild>
              <a href={`https://api.whatsapp.com/send?phone=558181369560&text=Olá! Desejo contratar o plano ${p.name} da Zyrion Play.`} target="_blank" rel="noopener noreferrer">
                Assinar Agora
              </a>
            </Button>
          </div>
        ))}
        {/* Espaçador invisível para não cortar o último item no mobile */}
        <div className="shrink-0 w-1 md:hidden" aria-hidden="true"></div>
      </div>

      <p className="text-center text-sm text-muted-foreground mt-8">
        ⚡ Pagamento exclusivo via Pix • Liberação imediata após o envio do comprovante
      </p>
    </div>
  </section>
);

export default Plans;
