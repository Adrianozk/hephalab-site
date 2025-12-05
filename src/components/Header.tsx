import { motion } from "framer-motion";
import logo from "@/assets/hephalab-logo.png";

const Header = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border"
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <button onClick={() => scrollToSection("hero")} className="flex items-center gap-3">
          <img src={logo} alt="HephaLab Logo" className="h-12 w-auto" />
        </button>

        <nav className="hidden md:flex items-center gap-8">
          {[
            { label: "Serviços", id: "servicos" },
            { label: "Sobre", id: "sobre" },
            { label: "Trabalhos", id: "trabalhos" },
            { label: "Contato", id: "contato" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="font-display text-sm uppercase tracking-wider text-foreground/80 hover:text-accent transition-colors duration-300"
            >
              {item.label}
            </button>
          ))}
        </nav>

        <button
          onClick={() => scrollToSection("contato")}
          className="bg-gradient-accent text-accent-foreground px-6 py-2 rounded-md font-display text-sm uppercase tracking-wider hover:shadow-accent transition-all duration-300 hover:scale-105"
        >
          Orçamento
        </button>
      </div>
    </motion.header>
  );
};

export default Header;
