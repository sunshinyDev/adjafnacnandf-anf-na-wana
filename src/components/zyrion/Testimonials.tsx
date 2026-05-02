import { Star, Quote } from "lucide-react";

const testimonials = [
  { name: "Carlos Silva", role: "Cliente há 1 ano", text: "A melhor estabilidade que já encontrei. Os canais de esporte não travam nunca, mesmo em dias de jogos importantes.", rating: 5 },
  { name: "Mariana Costa", role: "Revendedora", text: "O painel de revenda é super intuitivo. Comecei com 10 créditos e hoje já tenho mais de 100 clientes ativos.", rating: 5 },
  { name: "Ricardo Alves", role: "Cliente Premium", text: "O suporte é nota 10. Sempre que tive dúvidas, me responderam em minutos no WhatsApp. Qualidade de imagem impecável.", rating: 5 },
];

const Testimonials = () => (
  <section className="py-24 relative bg-primary/5">
    <div className="container">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-primary font-semibold tracking-widest text-sm uppercase">Depoimentos</span>
        <h2 className="font-display text-4xl md:text-5xl font-black mt-4 mb-4">O que dizem nossos <span className="text-gradient-primary">membros</span></h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <div key={i} className="bg-gradient-card border border-border p-8 rounded-3xl relative">
            <Quote className="absolute top-6 right-8 h-8 w-8 text-primary/10" />
            <div className="flex gap-1 mb-4">
              {[...Array(t.rating)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-primary text-primary" />
              ))}
            </div>
            <p className="text-muted-foreground mb-6 italic">"{t.text}"</p>
            <div>
              <div className="font-bold text-foreground">{t.name}</div>
              <div className="text-xs text-primary">{t.role}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
