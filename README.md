# 🌊 Portfólio — Alessandra Cristina de Oliveira

Site pessoal para apresentar quem sou e os projetos em que trabalhei como **desenvolvedora** e **product designer/owner**.

Feito com HTML, CSS e JavaScript puros, sem framework e sem etapa de build: é só abrir o `index.html`.

## 🧩 Recursos

- **Formulário de contato** enviado pelo [FormSubmit](https://formsubmit.co/), sem servidor próprio
- **Painel de acessibilidade**: aumentar/diminuir texto, alto contraste e destacar links (a escolha fica salva no navegador)
- Layout responsivo (computador e celular)

---

## ✨ Projetos em destaque

| Projeto | Tipo | Link |
|---|---|---|
| **Mast Soluções & Tecnologia** | Website institucional | [mastsolucoes.com](https://mastsolucoes.com/) |
| **AppVirtualCall** | App mobile (React Native + Expo) | [Repositório](https://github.com/lecristinna/AppVirtualCall) |
| **m'AGILE** | Product ownership · dashboard de produtividade | Print da tela em `src/img/` |
| **Renascidos em Pentecostes** | Product design · 13 telas de app | PDF em `src/docs/` |

## 🎨 Identidade visual

Uma paleta calma, com tons de azul-claro e creme e um toque de coral para os destaques. O estilo lembra um mural de cartões-postais.

| Variável | Hex | Uso |
|---|---|---|
| `--azul-escuro` | `#0D3B40` | Texto principal e fundo do contato |
| `--azul-medio` | `#1F6E76` | Textos secundários |
| `--azul-claro` | `#DCEEF4` | Fundo geral |
| `--creme` | `#FAF6EC` | Menu, "Sobre" e cards |
| `--verde` | `#7EB8A0` | Detalhes |
| `--coral` | `#E38B6E` | Destaques, links e botão |

**Fontes:** [Fraunces](https://fonts.google.com/specimen/Fraunces) (títulos), [Work Sans](https://fonts.google.com/specimen/Work+Sans) (texto) e [Space Mono](https://fonts.google.com/specimen/Space+Mono) (labels e tags).

## 📁 Estrutura

```
portfolio/
├── index.html          # Página única: menu, início, sobre, projetos e contato
├── README.md
└── src/
    ├── css/style.css   # Estilos (as cores ficam no :root, no topo)
    ├── js/script.js    # Menu mobile, acessibilidade e formulário
    ├── img/            # Imagens (ex.: print do m'AGILE)
    └── docs/           # Arquivos para download (ex.: PDF das telas)
```

## 🚀 Como rodar

Abra o `index.html` no navegador. Se preferir um servidor local:

```bash
# com Python
python -m http.server 8000

# ou com Node
npx serve .
```

Depois acesse `http://localhost:8000`.

## ➕ Como adicionar um projeto

1. No `index.html`, copie um `<article class="card">` inteiro dentro de `.projetos-grid`.
2. Troque o rótulo, o título, a descrição, as tags e o link.
3. Se tiver um arquivo para mostrar (PDF, print), coloque em `src/docs/` ou `src/img/` e aponte o link para ele.

## ✉️ Formulário de contato

As mensagens chegam no e-mail configurado no `action` do formulário (`index.html`).

> **Primeiro envio:** o FormSubmit manda um e-mail de ativação. É só clicar em confirmar; depois disso, as mensagens chegam normalmente.

Para não deixar o e-mail visível no código, troque o endereço no `action` pelo código aleatório que o FormSubmit envia após a ativação.

## 🌐 Publicação (GitHub Pages)

Em **Settings → Pages**, escolha a branch `main` e a pasta `/ (root)`. O site fica disponível em `https://lecristinna.github.io/portfolio/`.

## 📬 Contato

- E-mail: [le.cristinna15@gmail.com](mailto:le.cristinna15@gmail.com)
- LinkedIn: [linkedin.com/in/lecristinna](https://linkedin.com/in/lecristinna)
- GitHub: [github.com/lecristinna](https://github.com/lecristinna)

---

© 2026 · Alessandra Cristina de Oliveira
