import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import logo from "@/assets/hephalab-logo.png";

const Hero = () => {
  const scrollToServices = () => {
    const element = document.getElementById("servicos");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="min-h-screen bg-gradient-hero flex items-center justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 pt-24">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-8"
          >
            <img 
              src={logo} 
              alt="HephaLab - Impressão 3D" 
              className="w-64 md:w-80 lg:w-96 h-auto animate-float"
            />
          </motion.div>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-muted-foreground text-lg md:text-xl max-w-2xl mb-4 font-body"
          >
            A arte da forja encontra a tecnologia do futuro
          </motion.p>

          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 uppercase tracking-tight"
          >
            Impressão 3D
            <span className="text-gradient block">Profissional</span>
          </motion.h1>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-muted-foreground text-base md:text-lg max-w-xl mb-10 font-body"
          >
            Transformamos suas ideias em realidade. Protótipos, peças customizadas e projetos exclusivos com qualidade e precisão.
          </motion.p>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button
              onClick={scrollToServices}
              className="bg-gradient-accent text-accent-foreground px-8 py-4 rounded-md font-display text-lg uppercase tracking-wider hover:shadow-accent transition-all duration-300 hover:scale-105"
            >
              Conheça Nossos Serviços
            </button>
            <a
              href="#contato"
              className="border-2 border-foreground bg-transparent text-foreground px-8 py-4 rounded-md font-display text-lg uppercase tracking-wider hover:bg-foreground hover:text-background transition-all duration-300"
            >
              Solicitar Orçamento
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <button
          onClick={scrollToServices}
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-accent transition-colors"
        >
          <span className="text-xs uppercase tracking-widest font-display">Explorar</span>
          <ArrowDown className="w-5 h-5 animate-bounce" />
        </button>
      </motion.div>
    </section>
  );
};

export default Hero;
