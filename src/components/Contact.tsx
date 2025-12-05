import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Instagram, MessageCircle } from "lucide-react";

const Contact = () => {
  return (
    <section id="contato" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-display uppercase tracking-widest text-sm">
            Fale Conosco
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-4 uppercase">
            Vamos Criar Juntos
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto font-body">
            Tem um projeto em mente? Entre em contato e receba um orçamento 
            personalizado sem compromisso.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-gradient-accent flex items-center justify-center flex-shrink-0">
                <MessageCircle className="w-6 h-6 text-accent-foreground" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground uppercase">
                  WhatsApp
                </h3>
                <p className="text-muted-foreground font-body mt-1">
                  Atendimento rápido e direto
                </p>
                <a
                  href="https://wa.me/5500000000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline font-semibold mt-2 inline-block"
                >
                  Clique para conversar
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-gradient-accent flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-accent-foreground" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground uppercase">
                  E-mail
                </h3>
                <p className="text-muted-foreground font-body mt-1">
                  contato@hephalab.com.br
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-gradient-accent flex items-center justify-center flex-shrink-0">
                <Instagram className="w-6 h-6 text-accent-foreground" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground uppercase">
                  Instagram
                </h3>
                <p className="text-muted-foreground font-body mt-1">
                  @hephalab
                </p>
                <a
                  href="https://instagram.com/hephalab"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline font-semibold mt-2 inline-block"
                >
                  Siga-nos
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-gradient-accent flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-accent-foreground" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground uppercase">
                  Localização
                </h3>
                <p className="text-muted-foreground font-body mt-1">
                  Brasil
                </p>
                <p className="text-muted-foreground/70 font-body text-sm mt-1">
                  Atendemos todo o território nacional
                </p>
              </div>
            </div>
          </motion.div>

          {/* CTA Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-dark rounded-2xl p-8 md:p-10 text-center flex flex-col justify-center"
          >
            <h3 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground uppercase">
              Pronto para começar?
            </h3>
            <p className="text-primary-foreground/70 font-body mt-4 mb-8">
              Envie sua ideia, desenho ou arquivo 3D e receba um orçamento 
              detalhado em até 24 horas.
            </p>
            <a
              href="https://wa.me/5500000000000?text=Olá! Gostaria de solicitar um orçamento para impressão 3D."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-accent text-accent-foreground px-8 py-4 rounded-md font-display text-lg uppercase tracking-wider hover:shadow-accent transition-all duration-300 hover:scale-105 inline-block"
            >
              Solicitar Orçamento
            </a>
            <p className="text-primary-foreground/50 font-body text-sm mt-6">
              Aceitamos arquivos STL, OBJ, STEP e outros formatos 3D
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
