import { motion } from "framer-motion";

const Gallery = () => {
  return (
    <section id="trabalhos" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-display uppercase tracking-widest text-sm">
            Portfólio
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-4 uppercase">
            Nossos Trabalhos
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto font-body">
            Confira alguns dos projetos que já realizamos. Cada peça conta uma história 
            de inovação e dedicação.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "Protótipos Industriais", category: "Engenharia" },
            { title: "Miniaturas Colecionáveis", category: "Arte" },
            { title: "Peças Funcionais", category: "Reposição" },
            { title: "Itens Decorativos", category: "Design" },
            { title: "Gabaritos e Moldes", category: "Indústria" },
            { title: "Projetos Personalizados", category: "Custom" },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative aspect-square bg-gradient-to-br from-muted to-card rounded-xl overflow-hidden border border-border hover:border-accent/50 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-dark opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex flex-col items-center justify-center p-6">
                <span className="text-accent font-display uppercase tracking-widest text-xs mb-2">
                  {item.category}
                </span>
                <h3 className="font-display text-xl text-primary-foreground text-center uppercase">
                  {item.title}
                </h3>
              </div>
              
              {/* Placeholder pattern */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 border-4 border-border rounded-lg flex items-center justify-center">
                  <svg
                    className="w-10 h-10 text-muted-foreground/50"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground font-body">
            Quer ver mais projetos ou discutir sua ideia?{" "}
            <a href="#contato" className="text-accent hover:underline font-semibold">
              Entre em contato
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
