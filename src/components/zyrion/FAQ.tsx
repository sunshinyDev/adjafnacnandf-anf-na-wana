import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "Como funciona a Zyrion Play?", a: "Após a confirmação do pagamento, você recebe seus dados de acesso em até 5 minutos via WhatsApp ou e-mail. Basta instalar o app em seu dispositivo e começar a assistir." },
  { q: "Em quais dispositivos posso assistir?", a: "Smart TVs (Samsung, LG, TCL, Philips), TV Box, Fire Stick, Roku, Chromecast, Android, iPhone, iPad, computadores Windows e Mac." },
  { q: "Preciso de internet rápida?", a: "Recomendamos no mínimo 15 Mbps para HD e 25 Mbps para 4K. Funcionamos com qualquer operadora de internet." },
  { q: "Tem teste grátis?", a: "Sim! Oferecemos 2 horas de teste grátis para você experimentar o serviço antes de assinar. Solicite pelo WhatsApp." },
  { q: "Posso cancelar quando quiser?", a: "Sim, não há fidelidade. Você só paga pelo período contratado e renova se desejar." },
  { q: "Quais formas de pagamento?", a: "Aceitamos exclusivamente Pix para garantir a liberação imediata e o melhor preço para nossos clientes." },
];

const FAQ = () => (
  <section id="faq" className="py-24 relative">
    <div className="container max-w-3xl">
      <div className="text-center mb-16">
        <span className="text-accent font-semibold tracking-widest text-sm uppercase">Dúvidas Frequentes</span>
        <h2 className="font-display text-4xl md:text-6xl font-black mt-4">
          Perguntas <span className="text-gradient-accent">comuns</span>
        </h2>
      </div>

      <Accordion type="single" collapsible className="space-y-4">
        {faqs.map((f, i) => (
          <AccordionItem
            key={i}
            value={`item-${i}`}
            className="bg-gradient-card border border-border rounded-xl px-6 hover:border-primary/40 transition-smooth"
          >
            <AccordionTrigger className="text-left font-semibold hover:text-primary hover:no-underline">
              {f.q}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQ;
