import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const features = [
  "Tecnologia FDM e Resina de alta precisão",
  "Materiais premium: PLA, PETG, ABS, TPU, Resina",
  "Acabamento profissional e pós-processamento",
  "Atendimento personalizado",
  "Prazos competitivos",
  "Orçamento sem compromisso",
];

const About = () => {
  return (
    <section id="sobre" className="py-24 bg-gradient-dark">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-accent font-display uppercase tracking-widest text-sm">
              Nossa História
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mt-4 uppercase">
              Sobre a HephaLab
            </h2>
            <p className="text-primary-foreground/70 mt-6 font-body leading-relaxed text-lg">
              Inspirados em <strong className="text-accent">Hefesto</strong>, o deus grego da forja e da criação, 
              unimos a tradição do artesanato com a tecnologia de ponta da impressão 3D.
            </p>
            <p className="text-primary-foreground/70 mt-4 font-body leading-relaxed">
              Na HephaLab, cada projeto é tratado como uma obra única. Assim como Hefesto 
              criava armas e armaduras para os deuses do Olimpo, nós damos forma às suas 
              ideias mais ousadas, transformando conceitos digitais em objetos reais com 
              precisão e dedicação.
            </p>
            <p className="text-primary-foreground/70 mt-4 font-body leading-relaxed">
              Nossa missão é democratizar o acesso à manufatura aditiva, oferecendo 
              soluções de qualidade tanto para empresas (B2B) quanto diretamente para 
              o consumidor final (B2C). Atendemos makers, designers, engenheiros e 
              qualquer pessoa que queira transformar suas ideias em produtos únicos 
              e personalizados.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-primary-foreground/5 backdrop-blur-sm rounded-2xl p-8 border border-primary-foreground/10"
          >
            <h3 className="font-display text-2xl font-semibold text-primary-foreground uppercase mb-6">
              Por que escolher a HephaLab?
            </h3>
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <motion.li
                  key={feature}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-primary-foreground/80 font-body">{feature}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
