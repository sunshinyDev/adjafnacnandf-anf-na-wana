import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const CTA = () => (
  <section className="py-24 relative overflow-hidden">
    <div className="container">
      <div className="relative rounded-3xl overflow-hidden bg-gradient-card border border-primary/30 p-12 md:p-20 text-center">
        <div className="absolute inset-0 bg-gradient-glow" />
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="relative z-10 max-w-2xl mx-auto">
          <h2 className="font-display text-4xl md:text-6xl font-black mb-6">
            Pronto para entrar no <span className="text-gradient-primary">futuro</span>?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Solicite agora seu teste grátis de 2 horas e comprove a qualidade Zyrion Play.
          </p>
          <Button variant="hero" size="xl" className="w-full sm:w-auto" asChild>
            <a href="https://wa.me/558181369560?text=Olá! Gostaria de solicitar um teste grátis de 2 horas." target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
              <MessageCircle className="h-5 w-5" />
              Teste Grátis no WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </div>
  </section>
);

export default CTA;
