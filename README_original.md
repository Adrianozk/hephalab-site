# Site HephaLab

Site estático oficial da HephaLab - Criando o Futuro em 3D

## Descrição

Site institucional da HephaLab, empresa especializada em impressão 3D, prototipagem rápida e produtos personalizados. O site foi desenvolvido seguindo a identidade visual da marca, com design responsivo e moderno.

## Características

- **Design Responsivo**: Funciona perfeitamente em desktop, tablet e mobile
- **Identidade Visual**: Aplicação consistente das cores e tipografia da marca HephaLab
- **Animações Suaves**: Efeitos de hover, scroll suave e animações CSS
- **SEO Otimizado**: Meta tags e estrutura HTML semântica
- **Performance**: Código otimizado e carregamento rápido

## Estrutura de Arquivos

```
hephalab-site/
├── index.html          # Página principal
├── styles.css          # Estilos CSS
├── script.js           # JavaScript para interatividade
├── logo-hephalab.png   # Logotipo da empresa
└── README.md           # Este arquivo
```

## Seções do Site

1. **Hero Section**: Apresentação principal com logotipo e call-to-action
2. **Sobre**: História da empresa e estatísticas
3. **Serviços**: 6 serviços principais oferecidos
4. **Produtos**: Produtos em destaque
5. **Contato**: Informações de contato e redes sociais
6. **Footer**: Links e copyright

## Paleta de Cores

- **Primário Escuro**: #212121
- **Laranja Vibrante**: #FF6600
- **Bege/Off-white**: #F5F5DC
- **Cinza Médio**: #757575
- **Azul Escuro**: #003366

## Tipografia

- **Títulos**: Montserrat (Google Fonts)
- **Corpo**: Open Sans (Google Fonts)

## Como Hospedar

### Opção 1: Hospedagem Tradicional (cPanel)

1. Faça upload de todos os arquivos para a pasta `public_html` do seu servidor
2. Certifique-se de que o arquivo `index.html` está na raiz
3. Configure o domínio `hephalab.com.br` para apontar para o servidor

### Opção 2: Netlify (Recomendado)

1. Acesse [netlify.com](https://netlify.com)
2. Faça drag & drop da pasta `hephalab-site` na área de deploy
3. Configure o domínio personalizado `hephalab.com.br`

### Opção 3: Vercel

1. Acesse [vercel.com](https://vercel.com)
2. Conecte seu repositório Git ou faça upload dos arquivos
3. Configure o domínio personalizado

### Opção 4: GitHub Pages

1. Crie um repositório no GitHub
2. Faça upload dos arquivos
3. Ative o GitHub Pages nas configurações
4. Configure o domínio personalizado

## Configuração de Domínio

Para usar o domínio `hephalab.com.br`:

1. **DNS**: Configure os registros DNS para apontar para o servidor de hospedagem
2. **CNAME**: Se usar Netlify/Vercel, configure um CNAME apontando para o subdomínio fornecido
3. **SSL**: Certifique-se de que o certificado SSL está ativo (HTTPS)

## Atualizações de Conteúdo

### Redes Sociais

Para atualizar os links das redes sociais, edite o arquivo `script.js` e use a função `updateSocialLinks()`:

```javascript
updateSocialLinks({
    instagram: 'https://instagram.com/hephalab',
    facebook: 'https://facebook.com/hephalab',
    whatsapp: 'https://wa.me/5511999999999',
    linkedin: 'https://linkedin.com/company/hephalab'
});
```

### Informações de Contato

Edite o arquivo `index.html` na seção de contato para atualizar:
- Email
- Telefone
- Endereço

### Produtos

Para adicionar novos produtos, edite a seção `produtos` no `index.html` e adicione novos cards seguindo a estrutura existente.

## Suporte

Para dúvidas sobre hospedagem ou atualizações do site, consulte a documentação da plataforma escolhida ou entre em contato com um desenvolvedor web.

## Tecnologias Utilizadas

- HTML5
- CSS3 (Flexbox, Grid, Animations)
- JavaScript (ES6+)
- Google Fonts
- Font Awesome (ícones)

---

© 2025 HephaLab. Todos os direitos reservados.

