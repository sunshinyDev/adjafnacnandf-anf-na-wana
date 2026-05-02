import { Button } from "@/components/ui/button";
import { Users, LayoutDashboard, ShieldCheck, DollarSign, ArrowRight, Zap } from "lucide-react";

const Reseller = () => {
  return (
    <section id="revenda" className="py-24 relative overflow-hidden">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-up">
            <span className="text-accent font-semibold tracking-widest text-sm uppercase">Oportunidade de Negócio</span>
            <h2 className="font-display text-4xl md:text-6xl font-black mt-4 mb-6">
              Torne-se um <span className="text-gradient-accent">Revendedor</span> VIP
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Tenha seu próprio painel de gerenciamento, crie seus próprios preços e lucre mais de 100% por assinatura. Nós fornecemos a infraestrutura, você foca nas vendas.
            </p>

            <div className="space-y-6 mb-10">
              {[
                { icon: LayoutDashboard, title: "Painel Exclusivo", desc: "Gerencie seus clientes, crie testes e renove assinaturas em segundos." },
                { icon: DollarSign, title: "Alta Lucratividade", desc: "Compre créditos a preço de custo e defina sua própria margem de lucro." },
                { icon: ShieldCheck, title: "Suporte Prioritário", desc: "Time técnico dedicado para ajudar você a crescer o seu negócio." },
              ].map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="mt-1 p-2 rounded-lg bg-accent/10 border border-accent/20">
                    <item.icon className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button variant="magenta" size="xl" asChild>
              <a href="https://api.whatsapp.com/send?phone=558181369560&text=Olá! Gostaria de saber mais sobre como ser um revendedor Zyrion Play." target="_blank" rel="noopener noreferrer">
                Quero ser Revendedor
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>

          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-accent opacity-20 blur-2xl group-hover:opacity-30 transition-smooth" />
            <div className="relative rounded-3xl border border-white/10 overflow-hidden shadow-2xl bg-gradient-card aspect-video flex items-center justify-center">
              <div className="text-center p-8">
                 <LayoutDashboard className="h-16 w-16 text-accent mx-auto mb-4 opacity-50" />
                 <p className="text-muted-foreground font-display text-xl">Painel de Controle Profissional</p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
              
              <div className="absolute bottom-8 left-8 right-8 p-6 rounded-2xl bg-black/40 backdrop-blur-md border border-white/10">
                <div className="flex items-center gap-3 mb-2">
                  <Zap className="h-5 w-5 text-accent" />
                  <span className="font-display font-bold">Inicie hoje mesmo</span>
                </div>
                <p className="text-xs text-muted-foreground">Investimento inicial baixo e retorno rápido. Junte-se a mais de 200 revendedores de sucesso.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reseller;
