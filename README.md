# 💕 Nossa História de Amor

<div align="center">

![Love Story](https://img.shields.io/badge/Love%20Story-Forever-ff6b6b?style=for-the-badge&logo=heart)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

*Uma página web romântica e interativa para celebrar momentos especiais*

[🌟 Demo](#-demonstração) • [🚀 Instalação](#-instalação) • [💝 Personalização](#-personalização) • [📸 Screenshots](#-screenshots)

</div>

---

## 📖 Sobre o Projeto

**Nossa História de Amor** é uma página web estática romântica e interativa, criada especialmente para celebrar o Dia dos Namorados e outros momentos especiais do relacionamento. O projeto apresenta uma timeline interativa dos principais marcos do relacionamento, um contador em tempo real do tempo juntos, e diversos efeitos visuais encantadores.

### ✨ Características Principais

- 💖 **Capa Romântica**: Seção hero com foto do casal e título elegante
- ⏰ **Contador em Tempo Real**: Mostra anos, meses, dias, horas, minutos e segundos juntos
- 📅 **Timeline Interativa**: Marcos importantes do relacionamento com fotos e links
- 🎨 **Design Responsivo**: Funciona perfeitamente em desktop e mobile
- ✨ **Efeitos Especiais**: Partículas flutuantes, corações interativos e animações suaves
- 🎭 **Cores Harmoniosas**: Paleta de cores romântica e agradável aos olhos

---

## 🎯 Funcionalidades

### 🕐 Contador de Tempo
- Atualização em tempo real a cada segundo
- Cálculo preciso desde a data de início do relacionamento
- Exibição em anos, meses, dias, horas, minutos e segundos

### 📜 Timeline Romântica
- Eventos organizados cronologicamente
- Suporte para fotos de cada evento
- Links para álbuns externos (Google Photos, etc.)
- Animações de entrada suaves

### 🎨 Efeitos Visuais
- Partículas flutuantes animadas no fundo
- Corações que aparecem ao clicar na página
- Gradientes suaves e transições elegantes
- Scroll suave entre seções

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Versão | Descrição |
|------------|--------|-----------|
| ![HTML5](https://img.shields.io/badge/-HTML5-E34F26?style=flat-square&logo=html5&logoColor=white) | 5 | Estrutura semântica da página |
| ![CSS3](https://img.shields.io/badge/-CSS3-1572B6?style=flat-square&logo=css3&logoColor=white) | 3 | Estilização e animações |
| ![JavaScript](https://img.shields.io/badge/-JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black) | ES6+ | Interatividade e funcionalidades |
| ![Font Awesome](https://img.shields.io/badge/-Font_Awesome-339AF0?style=flat-square&logo=fontawesome&logoColor=white) | 6.0 | Ícones elegantes |

---

## 📁 Estrutura do Projeto

```
nossa-historia-amor/
├── 📄 index.html              # Estrutura HTML principal
├── 🎨 styles.css              # Estilos e animações CSS
├── ⚡ script.js               # Funcionalidades JavaScript
├── 📖 README.md              # Documentação do projeto
└── 📂 assets/                # Recursos do projeto
    ├── 📸 fotos/             # Imagens do casal
    │   ├── capa.jpg
    │   ├── primeiro-encontro.jpg
    │   ├── primeiro-beijo.jpg
    │   ├── pedido.jpg
    │   ├── casamento.jpg
    │   ├── nascimento.jpg
    │   └── primeiros-passos.jpg
    └── 🎬 videos/            # Vídeos especiais
        └── momentos-especiais.mp4
```

---

## 🚀 Instalação

### Pré-requisitos
- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- Servidor web local (opcional, mas recomendado)

### Passos

1. **Clone o repositório**
   ```bash
   git clone https://github.com/seu-usuario/nossa-historia-amor.git
   cd nossa-historia-amor
   ```

2. **Adicione suas fotos**
   - Coloque suas fotos na pasta `assets/fotos/`
   - Renomeie os arquivos conforme a estrutura sugerida

3. **Abra no navegador**
   ```bash
   # Opção 1: Diretamente
   open index.html
   
   # Opção 2: Com servidor local (recomendado)
   python -m http.server 8000
   # ou
   npx serve .
   ```

4. **Acesse no navegador**
   ```
   http://localhost:8000
   ```

---

## 💝 Personalização

### 🗓️ Configurar Data de Início

Edite o arquivo `script.js` na linha 2:

```javascript
// Altere para a data real do início do relacionamento
const startDate = new Date('2020-03-15T00:00:00');
```

### 📝 Personalizar Textos

No arquivo `index.html`, personalize:

- **Título principal**: Altere "Nossa História de Amor"
- **História do casal**: Seção "Nossa História"
- **Eventos da timeline**: Datas, títulos e descrições

### 🖼️ Adicionar Fotos

1. Substitua os placeholders pelas suas fotos reais
2. Mantenha as proporções adequadas (recomendado: 1:1 para capa, 16:9 para timeline)
3. Otimize as imagens para web (recomendado: < 500KB cada)

### 🎨 Personalizar Cores

No arquivo `styles.css`, altere as variáveis de cor:

```css
/* Gradiente principal */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

/* Cor dos corações */
color: #ff6b6b;

/* Contador de amor */
background: linear-gradient(135deg, #ff6b6b 0%, #ff8e8e 100%);
```

---

## 📸 Screenshots

<div align="center">

### 🏠 Página Inicial
*Capa romântica com foto do casal e título elegante*

### ⏰ Contador de Tempo
*Contador em tempo real mostrando o tempo juntos*

### 📅 Timeline
*Marcos importantes do relacionamento organizados cronologicamente*

</div>

---

## 🌟 Demonstração

🔗 **[Ver Demo Online](https://seu-usuario.github.io/nossa-historia-amor)**

### Recursos Interativos

- ✨ Clique em qualquer lugar para fazer corações aparecerem
- 📱 Teste a responsividade em diferentes dispositivos
- 🖱️ Hover nos elementos da timeline para ver efeitos

---

## 🤝 Contribuições

Contribuições são sempre bem-vindas! Sinta-se à vontade para:

1. 🍴 Fazer um fork do projeto
2. 🌿 Criar uma branch para sua feature (`git checkout -b feature/nova-funcionalidade`)
3. 💾 Commit suas mudanças (`git commit -am 'Adiciona nova funcionalidade'`)
4. 📤 Push para a branch (`git push origin feature/nova-funcionalidade`)
5. 🔄 Abrir um Pull Request

### 💡 Ideias para Contribuições

- 🎵 Adicionar música de fundo
- 📱 Melhorar responsividade
- 🎨 Novos temas de cores
- 📊 Analytics de visualizações
- 🌐 Suporte a múltiplos idiomas

---

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

```
MIT License

Copyright (c) 2025 Seu Nome

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
```

---

## 💌 Mensagem Especial

> *"O amor não é sobre encontrar a pessoa perfeita, mas sobre ver uma pessoa imperfeita de forma perfeita."* 

Este projeto foi criado com muito amor e carinho para celebrar momentos especiais. Que ele possa inspirar outros casais a celebrarem sua própria história de amor! 💕

---

<div align="center">

### 🌟 Se você gostou deste projeto, não esqueça de dar uma estrela!

[![GitHub stars](https://img.shields.io/github/stars/seu-usuario/nossa-historia-amor?style=social)](https://github.com/seu-usuario/nossa-historia-amor/stargazers)

**Feito com ❤️ para celebrar o amor**

[⬆️ Voltar ao topo](#-nossa-história-de-amor)

</div>