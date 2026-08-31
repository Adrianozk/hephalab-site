# HephaLab — site institucional

Código-fonte do site institucional da **HephaLab**, iniciativa de impressão 3D e manufatura aditiva sediada em Campinas, SP.

**Site em produção:** [hephalab.com.br](https://hephalab.com.br)

## Sobre o projeto

A landing page apresenta a marca, os serviços oferecidos e os canais de contato da HephaLab. O projeto foi desenvolvido como um site estático, sem etapa de compilação ou dependências de execução, priorizando carregamento rápido e manutenção simples.

## Funcionalidades

- layout responsivo para desktop, tablet e celular;
- navegação por seções com rolagem suave;
- menu adaptado para dispositivos móveis;
- apresentação dos serviços de impressão e modelagem 3D;
- integração com WhatsApp e redes sociais;
- animações acionadas durante a rolagem;
- metadados básicos para mecanismos de busca e compartilhamento.

## Tecnologias

- HTML5
- CSS3
- JavaScript
- Font Awesome
- Google Fonts

## Estrutura

```text
.
├── index.html
├── styles.css
├── script.js
├── logo-hephalab.png
└── logo-hephalab-transparente.png
```

## Execução local

O site pode ser aberto diretamente pelo arquivo `index.html`. Para servi-lo por HTTP durante o desenvolvimento, execute na raiz:

```bash
python -m http.server 8000
```

Depois acesse `http://localhost:8000`.

## Implantação

Por ser totalmente estático, o projeto pode ser hospedado em serviços como GitHub Pages, Netlify, Vercel ou qualquer servidor HTTP convencional. A versão em produção utiliza o domínio `hephalab.com.br`.

## Licença

Distribuído sob a licença MIT. Consulte [LICENSE](LICENSE).

## Autoria

Desenvolvido e mantido por [Adriano Fernandes](https://github.com/Adrianozk).
