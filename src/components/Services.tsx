import { motion } from "framer-motion";
import { Layers, Wrench, Lightbulb, Settings, Zap, Target } from "lucide-react";

const services = [
  {
    icon: Layers,
    title: "Prototipagem",
    description: "Transforme conceitos em protótipos físicos rapidamente. Ideal para validação de design e funcionalidade.",
  },
  {
    icon: Wrench,
    title: "Peças Funcionais",
    description: "Produção de peças de reposição e componentes funcionais com materiais de alta resistência.",
  },
  {
    icon: Lightbulb,
    title: "Projetos Criativos",
    description: "Miniaturas, esculturas, itens decorativos e projetos artísticos personalizados.",
  },
  {
    icon: Settings,
    title: "Engenharia",
    description: "Soluções técnicas para indústria, gabaritos, moldes e ferramentas especiais.",
  },
  {
    icon: Zap,
    title: "Produção Rápida",
    description: "Pequenas séries de produção com agilidade e custo-benefício superior à injeção tradicional.",
  },
  {
    icon: Target,
    title: "Consultoria 3D",
    description: "Orientação técnica para otimização de projetos e escolha dos melhores materiais.",
  },
];

const Services = () => {
  return (
    <section id="servicos" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-display uppercase tracking-widest text-sm">O que fazemos</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-4 uppercase">
            Nossos Serviços
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto font-body">
            Oferecemos soluções completas em impressão 3D para diversos segmentos, 
            sempre com foco em qualidade e atendimento personalizado.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-card p-8 rounded-lg shadow-card hover:shadow-soft transition-all duration-300 border border-border hover:border-accent/30"
            >
              <div className="w-14 h-14 rounded-lg bg-gradient-accent flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-7 h-7 text-accent-foreground" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground uppercase mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground font-body leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
