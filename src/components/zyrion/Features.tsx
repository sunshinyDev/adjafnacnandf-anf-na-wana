import { Smartphone, Tv2, Wifi, Shield, Headphones, Sparkles } from "lucide-react";

const features = [
  { icon: Tv2, title: "Qualidade 4K Ultra HD", desc: "Imagem cristalina sem travamentos com servidores de alta performance." },
  { icon: Smartphone, title: "Multi-Dispositivos", desc: "Smart TV, Celular, Tablet, PC, Fire Stick, Roku e muito mais." },
  { icon: Wifi, title: "Servidores Estáveis", desc: "Infraestrutura redundante garantindo 99.9% de disponibilidade." },
  { icon: Shield, title: "Conexão Segura", desc: "Criptografia de ponta protegendo seus dados e privacidade." },
  { icon: Headphones, title: "Suporte 24/7", desc: "Atendimento humano via WhatsApp todos os dias da semana." },
  { icon: Sparkles, title: "Atualizações Semanais", desc: "Novos filmes, séries e canais adicionados toda semana." },
];

const Features = () => (
  <section id="recursos" className="py-24 relative">
    <div className="absolute inset-0 bg-gradient-glow opacity-50" />
    <div className="container relative z-10">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-primary font-semibold tracking-widest text-sm uppercase">Por que Zyrion Play</span>
        <h2 className="font-display text-4xl md:text-6xl font-black mt-4 mb-4">
          Tecnologia <span className="text-gradient-primary">de ponta</span>
        </h2>
        <p className="text-muted-foreground text-lg">Tudo que você precisa para a melhor experiência de streaming.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((f, i) => (
          <div
            key={f.title}
            className="group relative p-8 rounded-2xl bg-gradient-card border border-border hover:border-primary/50 transition-smooth hover:-translate-y-2"
            style={{ animationDelay: `${i * 100}ms` }}
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-primary opacity-0 group-hover:opacity-10 transition-smooth" />
            <div className="relative">
              <div className="inline-flex p-3 rounded-xl bg-primary/10 border border-primary/20 mb-5 group-hover:shadow-neon transition-smooth">
                <f.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-display text-xl font-bold mb-2">{f.title}</h3>
              <p className="text-muted-foreground">{f.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Features;
