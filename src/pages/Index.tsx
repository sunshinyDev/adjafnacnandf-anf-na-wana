import Navbar from "@/components/zyrion/Navbar";
import Hero from "@/components/zyrion/Hero";
import Features from "@/components/zyrion/Features";
import Plans from "@/components/zyrion/Plans";
import Content from "@/components/zyrion/Content";
import Reseller from "@/components/zyrion/Reseller";
import Testimonials from "@/components/zyrion/Testimonials";
import FAQ from "@/components/zyrion/FAQ";
import CTA from "@/components/zyrion/CTA";
import Footer from "@/components/zyrion/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <h1 className="sr-only">Zyrion Play - IPTV Premium com mais de 1.000 canais HD e 20.000 conteúdos 4K</h1>
      <Hero />
      <Features />
      <Plans />
      <Content />
      <Reseller />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
};

export default Index;
