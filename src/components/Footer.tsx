import logo from "@/assets/hephalab-logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary py-12 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src={logo} alt="HephaLab" className="h-10 w-auto" />
          </div>

          <p className="text-primary-foreground/60 font-body text-sm text-center">
            © {new Date().getFullYear()} HephaLab. Todos os direitos reservados.
          </p>

          <div className="flex items-center gap-6">
            <a
              href="https://instagram.com/hephalab"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-foreground/60 hover:text-accent transition-colors font-display text-sm uppercase tracking-wider"
            >
              Instagram
            </a>
            <a
              href="https://wa.me/5500000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-foreground/60 hover:text-accent transition-colors font-display text-sm uppercase tracking-wider"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
