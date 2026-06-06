# LocalHost — Cardápio Digital

> Cardápio digital temático para desenvolvedores, desenvolvido como projeto da disciplina de **Interface Humano-Computador (IHC)**.

---

## Descrição do Projeto

O **LocalHost** é um cardápio digital interativo com identidade visual inspirada no universo da programação. Os produtos — hambúrgueres, pizzas, bebidas e acompanhamentos — são nomeados e descritos com referências a linguagens de programação, frameworks e conceitos de tecnologia, criando uma experiência temática e divertida para o público dev.

O projeto foi desenvolvido com foco em **acessibilidade**, garantindo que diferentes perfis de usuário possam navegar e interagir com o cardápio de forma inclusiva.

---

## Objetivos

- Desenvolver um cardápio digital funcional e esteticamente coerente com o tema dev
- Aplicar conceitos e boas práticas de **Interface Humano-Computador (IHC)**
- Garantir **acessibilidade** para diferentes perfis de usuário (visual, motor, auditivo)
- Praticar o desenvolvimento colaborativo com **Git e GitHub** (branches, pull requests, resolução de conflitos)
- Criar uma navegação intuitiva e responsiva

---

## Funcionalidades

### Navegação
- Tela inicial com entrada para o cardápio digital
- Navegação por **5 categorias**: Mais Vendidos, Hambúrgueres, Pizzas, Bebidas e Acompanhamentos
- **Página de detalhe** individual para cada produto com imagem, descrição temática (em código), preço e quantidade

### Acessibilidade
- **Navegação completa pelo teclado** — todos os elementos recebem foco com `Tab`, `Enter` e `Espaço`
- **Foco visível** — anel de foco em todos os elementos interativos
- **Alto contraste** — modo de alto contraste ativável para usuários com baixa visão
- **Ajuste de fonte** — botões A+, A- e Modo Leitura para personalizar o tamanho do texto
- **VLibras** — integração com o plugin de acessibilidade em Língua Brasileira de Sinais (Libras)
- **Descrições acessíveis** nos produtos além das descrições temáticas em código

### Interatividade
- **Favoritar produtos** com ícone de coração (toggle cheio/vazio)
- **Controle de quantidade** na página de detalhe (botões + e −)
- **Área de commit** — campo para o usuário escrever uma mensagem temática

---

## Tecnologias Utilizadas

| Tecnologia | Uso |
|---|---|
| **HTML5** | Estrutura das páginas |
| **CSS3** | Estilização, variáveis CSS, layout flexbox |
| **JavaScript (Vanilla)** | Interatividade, navegação por teclado, acessibilidade |
| **Google Fonts** | Fira Code, Dosis, Roboto |
| **VLibras Plugin** | Acessibilidade em Libras |
| **Git & GitHub** | Versionamento e colaboração |

---

## Estrutura de Arquivos

```
cardapiolocalhost/
│
├── index.html                  # Tela inicial
├── produtos.html               # Mais Vendidos
├── hamburgueres.html           # Categoria Hambúrgueres
├── pizzas.html                 # Categoria Pizzas
├── bebidas.html                # Categoria Bebidas
├── acompanhamentos.html        # Categoria Acompanhamentos
│
├── detalhe-bacon.html          # Páginas de detalhe (16 produtos)
├── detalhe-cpp-burguer.html
├── detalhe-*.html
│
├── style.css                   # Estilos da tela inicial e detalhe
├── cardapio.css                # Estilos do cardápio
├── header-style.css            # Estilos do cabeçalho
├── contraste.css               # Estilos do modo alto contraste
│
├── contraste.js                # Lógica do alto contraste
├── produtos-data.js            # Dados dos produtos
├── gerar-detalhes.js           # Script gerador das páginas de detalhe
│
├── js/
│   ├── coracao.js              # Lógica de favoritar produtos
│   └── fonte-acessibilidade.js # Lógica de ajuste de fonte
│
└── img/
    ├── logo-localhost.png
    ├── coracao-vazio.png
    ├── coracao-cheio.png
    └── produtos/               # Imagens dos 16 produtos
```

---

## Produtos do Cardápio

### Hambúrgueres
| Produto | Preço |
|---|---|
| C++ Burguer | R$ 28,99 |
| PyBurguer | R$ 22,99 |
| Fullstack Burguer | R$ 34,99 |
| Bacon# | R$ 25,99 |

### Pizzas
| Produto | Preço |
|---|---|
| PHPizza | R$ 29,99 |
| Queijo Fullstack | R$ 31,99 |
| Javarita | R$ 33,99 |
| Frango com CatuPy | R$ 28,99 |

### Bebidas
| Produto | Preço |
|---|---|
| Soft.cpp | R$ 05,99 |
| Suco-Git | R$ 04,99 |
| Java Coffee | R$ 02,99 |
| Água (H2O) | R$ 01,99 |

### Acompanhamentos
| Produto | Preço |
|---|---|
| JS Fries | R$ 12,99 |
| Nuggets++ | R$ 13,99 |
| Onion.py | R$ 12,99 |
| Rust-ica | R$ 14,99 |

---

## Como Executar

O projeto é composto por arquivos estáticos — não requer instalação ou servidor.

1. Clone o repositório:
```bash
git clone https://github.com/Welberth77/localhost-projeto.git
```

2. Abra o arquivo `index.html` no navegador, ou use a extensão **Live Server** do VS Code.

---

## Testando a Acessibilidade

| Recurso | Como testar |
|---|---|
| Navegação por teclado | Use `Tab`, `Shift+Tab`, `Enter` e `Espaço` |
| Foco visível | Observe o anel teal ao navegar com teclado |
| Alto contraste | Clique no botão de contraste no topo do cardápio |
| Ajuste de fonte | Use os botões A+, A- e Modo Leitura |
| VLibras | Clique no ícone do VLibras no canto da tela |

---

## Integrantes

| Nome |
|---|---|
| Ricardo Antonio |
| Welberth Oliveira | 
| Danilo Lima |
| Paulo Cesar | 
| Igor Rafael |

