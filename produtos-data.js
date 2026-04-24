const produtos = {
  // ── MAIS VENDIDOS / HAMBÚRGUERES ─────────────────────
  "cpp-burguer": {
    nome:      "C++ Burguer",
    categoria: "Hamburguer",
    preco:     "R$ 28,99;",
    imagem:    "img/produtos/c++burguer.png",
    codigo: [
      { tipo: "comment", texto: "// Ingredientes do Burguer" },
      { tipo: "white",   texto: "class Burger : " },
      { tipo: "inline",  partes: [
        { tipo: "keyword", texto: "public" },
        { tipo: "white",   texto: " Satisfaction {" }
      ]},
      { tipo: "white",   texto: "  double carne = " },
      { tipo: "inline",  partes: [
        { tipo: "number",  texto: "180.0" },
        { tipo: "comment", texto: "; // 180g smash" }
      ]},
      { tipo: "white",   texto: '  string[] extras = {' },
      { tipo: "inline",  partes: [
        { tipo: "string",  texto: '"Cheddar"' },
        { tipo: "white",   texto: ", " },
        { tipo: "string",  texto: '"Bacon"' },
        { tipo: "white",   texto: "," }
      ]},
      { tipo: "inline",  partes: [
        { tipo: "white",   texto: "    " },
        { tipo: "string",  texto: '"Alface"' },
        { tipo: "white",   texto: ", " },
        { tipo: "string",  texto: '"Tomate"' },
        { tipo: "white",   texto: ", " },
        { tipo: "string",  texto: '"Picles"' },
        { tipo: "white",   texto: ", " },
        { tipo: "string",  texto: '"Molho"' },
        { tipo: "white",   texto: "};" }
      ]},
      { tipo: "comment", texto: "  // Servido com fritas por padrao" },
      { tipo: "white",   texto: "};" }
    ]
  },

  "pyburguer": {
    nome:      "PyBurguer",
    categoria: "Hamburguer",
    preco:     "R$ 22,99;",
    imagem:    "img/produtos/pyburguer.png",
    codigo: [
      { tipo: "comment", texto: "// Ingredientes do PyBurguer" },
      { tipo: "inline",  partes: [
        { tipo: "white",   texto: "ingredients = [" },
        { tipo: "string",  texto: '"180g carne"' },
        { tipo: "white",   texto: "," }
      ]},
      { tipo: "inline",  partes: [
        { tipo: "string",  texto: '"cheddar_melted"' },
        { tipo: "white",   texto: ", " },
        { tipo: "string",  texto: '"pao_brioche"' },
        { tipo: "white",   texto: "]" }
      ]},
      { tipo: "comment", texto: '# SatisfactionLevel: CRITICAL_MAX' }
    ]
  },

  "fullstack-burguer": {
    nome:      "Fullstack Burguer",
    categoria: "Hamburguer",
    preco:     "R$ 34,99;",
    imagem:    "img/produtos/fullstack-burguer.png",
    codigo: [
      { tipo: "comment", texto: "// Ingredientes do Fullstack" },
      { tipo: "keyword", texto: "const" },
      { tipo: "inline",  partes: [
        { tipo: "white",   texto: " stack = [" },
        { tipo: "string",  texto: "'Pão'" },
        { tipo: "white",   texto: ", " },
        { tipo: "string",  texto: "'2x Carne'" },
        { tipo: "white",   texto: "," }
      ]},
      { tipo: "inline",  partes: [
        { tipo: "string",  texto: "'Ovo'" },
        { tipo: "white",   texto: ", " },
        { tipo: "string",  texto: "'Bacon'" },
        { tipo: "white",   texto: ", " },
        { tipo: "string",  texto: "'Queijo'" },
        { tipo: "white",   texto: "];" }
      ]},
      { tipo: "white",   texto: "return stack.render();" }
    ]
  },

  "bacon": {
    nome:      "Bacon#",
    categoria: "Hamburguer",
    preco:     "R$ 25,99;",
    imagem:    "img/produtos/bacon.png",
    codigo: [
      { tipo: "comment", texto: "// Ingredientes do Bacon#" },
      { tipo: "keyword", texto: "var" },
      { tipo: "inline",  partes: [
        { tipo: "white",   texto: " bacon = " },
        { tipo: "keyword", texto: "new" },
        { tipo: "white",   texto: " Ingredient(" },
        { tipo: "string",  texto: '"Crocante"' },
        { tipo: "white",   texto: ");" }
      ]},
      { tipo: "keyword", texto: "while" },
      { tipo: "inline",  partes: [
        { tipo: "white",   texto: " (hungry) { Me.Eat(bacon); }" }
      ]}
    ]
  },

  // ── PIZZAS ───────────────────────────────────────────
  "phpizza": {
    nome:      "PHPizza",
    categoria: "Pizza",
    preco:     "R$ 29,99;",
    imagem:    "img/produtos/PHPizza.png",
    codigo: [
      { tipo: "comment", texto: "// Ingredientes da PHPizza" },
      { tipo: "inline",  partes: [
        { tipo: "keyword", texto: "$ingredientes" },
        { tipo: "white",   texto: " = [" },
        { tipo: "string",  texto: '"Pepperoni"' },
        { tipo: "white",   texto: "," }
      ]},
      { tipo: "inline",  partes: [
        { tipo: "string",  texto: '"Mussarela"' },
        { tipo: "white",   texto: ", " },
        { tipo: "string",  texto: '"Molho"' },
        { tipo: "white",   texto: "];" }
      ]},
      { tipo: "keyword", texto: "foreach" },
      { tipo: "inline",  partes: [
        { tipo: "white",   texto: " ($ingredientes " },
        { tipo: "keyword", texto: "as" },
        { tipo: "white",   texto: " $i) " },
        { tipo: "keyword", texto: "echo" },
        { tipo: "white",   texto: " $i;" }
      ]}
    ]
  },

  "queijo-fullstack": {
    nome:      "Queijo Fullstack",
    categoria: "Pizza",
    preco:     "R$ 31,99;",
    imagem:    "img/produtos/queijo-fullstack.png",
    codigo: [
      { tipo: "comment", texto: "// Blend de queijos" },
      { tipo: "keyword", texto: "const" },
      { tipo: "inline",  partes: [
        { tipo: "white",   texto: " queijos = [" },
        { tipo: "string",  texto: "'Mussarela'" },
        { tipo: "white",   texto: "," }
      ]},
      { tipo: "inline",  partes: [
        { tipo: "string",  texto: "'Parmesão'" },
        { tipo: "white",   texto: ", " },
        { tipo: "string",  texto: "'Gorgonzola'" },
        { tipo: "white",   texto: "];" }
      ]},
      { tipo: "white",   texto: "queijos.join(' + ');" }
    ]
  },

  "javarita": {
    nome:      "Javarita",
    categoria: "Pizza",
    preco:     "R$ 33,99;",
    imagem:    "img/produtos/javarita.png",
    codigo: [
      { tipo: "comment", texto: "// Pizza Marguerita em Java" },
      { tipo: "keyword", texto: "String" },
      { tipo: "inline",  partes: [
        { tipo: "white",   texto: ' base = ' },
        { tipo: "string",  texto: '"Manjericão e Tomate"' },
        { tipo: "white",   texto: ";" }
      ]},
      { tipo: "white",   texto: 'System.out.println(' },
      { tipo: "string",  texto: '"Compilando..."' },
      { tipo: "white",   texto: ');' }
    ]
  },

  "frango-catupy": {
    nome:      "Frango com CatuPy",
    categoria: "Pizza",
    preco:     "R$ 28,99;",
    imagem:    "img/produtos/frango-com-catupy.png",
    codigo: [
      { tipo: "comment", texto: "# Sabor extraído com Python" },
      { tipo: "inline",  partes: [
        { tipo: "white",   texto: "base, extra = " },
        { tipo: "string",  texto: '"Frango Desfiado"' },
        { tipo: "white",   texto: ", " },
        { tipo: "string",  texto: '"Catupiry"' }
      ]},
      { tipo: "white",   texto: 'print(f"Status: {base} & {extra}")' }
    ]
  },

  // ── BEBIDAS ──────────────────────────────────────────
  "soft-cpp": {
    nome:      "Soft.cpp",
    categoria: "Bebida",
    preco:     "R$ 05,99;",
    imagem:    "img/produtos/soft-cpp.png",
    codigo: [
      { tipo: "comment", texto: "// Bebida gelada em C++" },
      { tipo: "keyword", texto: "string" },
      { tipo: "inline",  partes: [
        { tipo: "white",   texto: " sabores[] = {" },
        { tipo: "string",  texto: '"Coca"' },
        { tipo: "white",   texto: ", " },
        { tipo: "string",  texto: '"Guaraná"' },
        { tipo: "white",   texto: "};" }
      ]},
      { tipo: "keyword", texto: "for" },
      { tipo: "white",   texto: " (auto s : sabores) drink.addIce(s);" }
    ]
  },

  "suco-git": {
    nome:      "Suco-Git",
    categoria: "Bebida",
    preco:     "R$ 04,99;",
    imagem:    "img/produtos/suco-git.png",
    codigo: [
      { tipo: "comment", texto: "// Suco extraído com Git" },
      { tipo: "white",   texto: "git checkout -b " },
      { tipo: "string",  texto: '"Suco_Laranja"' },
      { tipo: "white",   texto: "git add gelo acucar" },
      { tipo: "white",   texto: 'git commit -m ' },
      { tipo: "string",  texto: '"Suco extraído com sucesso"' }
    ]
  },

  "java-coffee": {
    nome:      "Java Coffee",
    categoria: "Bebida",
    preco:     "R$ 02,99;",
    imagem:    "img/produtos/java-coffee.png",
    codigo: [
      { tipo: "comment", texto: "// Café que compila o dia" },
      { tipo: "keyword", texto: "while" },
      { tipo: "inline",  partes: [
        { tipo: "white",   texto: " (!brain.isWorking()) {" }
      ]},
      { tipo: "white",   texto: "  me.drink(" },
      { tipo: "keyword", texto: "new" },
      { tipo: "white",   texto: " Coffee());" },
      { tipo: "white",   texto: "} // Heap space: Full energy" }
    ]
  },

  "agua": {
    nome:      "index.html",
    categoria: "Bebida",
    preco:     "R$ 01,99;",
    imagem:    "img/produtos/agua.png",
    codigo: [
      { tipo: "comment", texto: "// Água mineral natural" },
      { tipo: "white",   texto: "<div " },
      { tipo: "keyword", texto: 'class' },
      { tipo: "white",   texto: '="copo">' },
      { tipo: "white",   texto: "  <span " },
      { tipo: "keyword", texto: "id" },
      { tipo: "white",   texto: '="h2o">Mineral Natural</span>' },
      { tipo: "white",   texto: "</div>" }
    ]
  },

  // ── ACOMPANHAMENTOS ──────────────────────────────────
  "js-fries": {
    nome:      "JS Fries",
    categoria: "Acompanhamento",
    preco:     "R$ 12,99;",
    imagem:    "img/produtos/js-fries.png",
    codigo: [
      { tipo: "comment", texto: "// Fritas crocantes em JS" },
      { tipo: "keyword", texto: "const" },
      { tipo: "inline",  partes: [
        { tipo: "white",   texto: " fries = Array(" },
        { tipo: "number",  texto: "50" },
        { tipo: "white",   texto: ").fill('🍟');" }
      ]},
      { tipo: "white",   texto: "fries.forEach(f => me.eat(f));" },
      { tipo: "white",   texto: 'console.log(' },
      { tipo: "string",  texto: '"Status: 200 OK"' },
      { tipo: "white",   texto: ');' }
    ]
  },

  "nuggets": {
    nome:      "Nuggets++",
    categoria: "Acompanhamento",
    preco:     "R$ 13,99;",
    imagem:    "img/produtos/nuggets.png",
    codigo: [
      { tipo: "comment", texto: "// Nuggets crocantes em C++" },
      { tipo: "keyword", texto: "Nuggets" },
      { tipo: "white",   texto: " crispy = Nuggets::create(10);" },
      { tipo: "white",   texto: "crispy.dip(BarbecueSauce);" },
      { tipo: "keyword", texto: "return" },
      { tipo: "white",   texto: " crispy.isDelicious();" }
    ]
  },

  "onion": {
    nome:      "Onion.py",
    categoria: "Acompanhamento",
    preco:     "R$ 12,99;",
    imagem:    "img/produtos/onion.png",
    codigo: [
      { tipo: "comment", texto: "# Anéis de cebola em Python" },
      { tipo: "keyword", texto: "for" },
      { tipo: "white",   texto: " ring in onion_rings:" },
      { tipo: "white",   texto: "  me.consume(ring)" },
      { tipo: "comment", texto: "# Camadas de sabor otimizadas" }
    ]
  },

  "rust-ica": {
    nome:      "Rust-ica",
    categoria: "Acompanhamento",
    preco:     "R$ 14,99;",
    imagem:    "img/produtos/rust-ica.png",
    codigo: [
      { tipo: "comment", texto: "// Batata rústica em Rust" },
      { tipo: "keyword", texto: "let" },
      { tipo: "inline",  partes: [
        { tipo: "white",   texto: " batata = Rustica::new(" },
        { tipo: "string",  texto: '"Crocante"' },
        { tipo: "white",   texto: ");" }
      ]},
      { tipo: "keyword", texto: "match" },
      { tipo: "white",   texto: " batata.flavor() {" },
      { tipo: "inline",  partes: [
        { tipo: "white",  texto: "  Good => println!(" },
        { tipo: "string", texto: '"Safe and Tasty!"' },
        { tipo: "white",  texto: ")," }
      ]},
      { tipo: "white",   texto: "}" }
    ]
  }
};
