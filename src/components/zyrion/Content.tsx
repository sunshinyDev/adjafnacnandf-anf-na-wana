import { Film, Trophy, Tv, Baby, Globe, Music } from "lucide-react";

const categories = [
  { icon: Trophy, name: "Esportes", count: "500+ canais", color: "from-yellow-500 to-orange-500" },
  { icon: Film, name: "Filmes", count: "15.000+ títulos", color: "from-cyan-400 to-blue-600" },
  { icon: Tv, name: "Séries", count: "5.000+ séries", color: "from-pink-500 to-purple-600" },
  { icon: Baby, name: "Infantil", count: "20 canais", color: "from-green-400 to-emerald-600" },

];

const Content = () => (
  <section id="conteudo" className="py-24 relative overflow-hidden">
    <div className="container">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-primary font-semibold tracking-widest text-sm uppercase">Catálogo Completo</span>
        <h2 className="font-display text-4xl md:text-6xl font-black mt-4 mb-4">
          Tudo em <span className="text-gradient-primary">um só lugar</span>
        </h2>
        <p className="text-muted-foreground text-lg">Do esporte ao infantil, de filmes lançamentos a clássicos.</p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {categories.map((c) => (
          <div
            key={c.name}
            className="group relative h-full rounded-2xl bg-gradient-card border border-border overflow-hidden cursor-pointer transition-bounce hover:scale-105 hover:border-primary/50"
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${c.color} opacity-0 group-hover:opacity-30 transition-smooth`} />
            <div className="relative h-full flex flex-col items-center justify-center text-center p-6 md:p-8">
              <c.icon className="h-10 w-10 md:h-16 md:w-16 text-primary mb-2 md:mb-4 group-hover:scale-110 transition-bounce" />
              <h3 className="font-display text-lg md:text-2xl font-bold mb-1 leading-tight">{c.name}</h3>
              <p className="text-xs md:text-sm text-muted-foreground">{c.count}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Content;
