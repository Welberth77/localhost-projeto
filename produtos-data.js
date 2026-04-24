const produtos = {

  // ════════════════════════════════════════
  // HAMBÚRGUERES
  // ════════════════════════════════════════

  "cpp-burguer": {
    nome:      "C++ Burguer",
    categoria: "Hamburguer",
    preco:     "R$ 28,99;",
    imagem:    "img/produtos/c++burguer.png",
    codigo: [
      { tipo: "comment", texto: "// AVISO: pode causar overflow de satisfação" },
      { tipo: "keyword", texto: "class" },
      { tipo: "white",   texto: " Burger : " },
      { tipo: "inline",  partes: [
        { tipo: "keyword", texto: "public" },
        { tipo: "white",   texto: " Satisfaction {" }
      ]},
      { tipo: "inline",  partes: [
        { tipo: "keyword", texto: "  double" },
        { tipo: "white",   texto: " carne    = " },
        { tipo: "number",  texto: "180.0" },
        { tipo: "comment", texto: "; // smash blend" }
      ]},
      { tipo: "inline",  partes: [
        { tipo: "keyword", texto: "  string" },
        { tipo: "white",   texto: " molho    = " },
        { tipo: "string",  texto: '"segredo_da_casa"' },
        { tipo: "white",   texto: ";" }
      ]},
      { tipo: "inline",  partes: [
        { tipo: "keyword", texto: "  bool" },
        { tipo: "white",   texto: "   artesanal = " },
        { tipo: "number",  texto: "true" },
        { tipo: "white",   texto: ";" }
      ]},
      { tipo: "comment", texto: "  // WARNING: altamente viciante" },
      { tipo: "white",   texto: "};" }
    ]
  },

  "pyburguer": {
    nome:      "PyBurguer",
    categoria: "Hamburguer",
    preco:     "R$ 22,99;",
    imagem:    "img/produtos/pyburguer.png",
    codigo: [
      { tipo: "comment", texto: "# hamburguer.py — versão artesanal" },
      { tipo: "inline",  partes: [
        { tipo: "keyword", texto: "def" },
        { tipo: "white",   texto: " montar_burguer():" }
      ]},
      { tipo: "white",   texto: "  ingredientes = [" },
      { tipo: "string",  texto: '    "brioche_tostado"' },
      { tipo: "string",  texto: '    "carne_180g_smash"' },
      { tipo: "string",  texto: '    "cheddar_derretido"' },
      { tipo: "string",  texto: '    "molho_secreto"' },
      { tipo: "white",   texto: "  ]" },
      { tipo: "inline",  partes: [
        { tipo: "keyword", texto: "  return" },
        { tipo: "white",   texto: " sum(ingredientes)" }
      ]},
      { tipo: "comment", texto: "# retorno garantido: satisfação 🐍" }
    ]
  },

  "fullstack-burguer": {
    nome:      "Fullstack Burguer",
    categoria: "Hamburguer",
    preco:     "R$ 34,99;",
    imagem:    "img/produtos/fullstack-burguer.png",
    codigo: [
      { tipo: "comment", texto: "// frontend + backend + banco de dados" },
      { tipo: "inline",  partes: [
        { tipo: "keyword", texto: "const" },
        { tipo: "white",   texto: " stack = {" }
      ]},
      { tipo: "inline",  partes: [
        { tipo: "white",   texto: "  top:    " },
        { tipo: "string",  texto: '"Pão brioche"' },
        { tipo: "white",   texto: "," }
      ]},
      { tipo: "inline",  partes: [
        { tipo: "white",   texto: "  layers: [" },
        { tipo: "string",  texto: '"2x Carne"' },
        { tipo: "white",   texto: ", " },
        { tipo: "string",  texto: '"Ovo"' },
        { tipo: "white",   texto: ", " },
        { tipo: "string",  texto: '"Bacon"' },
        { tipo: "white",   texto: "]," }
      ]},
      { tipo: "inline",  partes: [
        { tipo: "white",   texto: "  db:     " },
        { tipo: "string",  texto: '"Queijo fundido"' },
        { tipo: "white",   texto: "," }
      ]},
      { tipo: "inline",  partes: [
        { tipo: "white",   texto: "  status: " },
        { tipo: "number",  texto: "200" },
        { tipo: "comment", texto: " // OK: Delicioso" }
      ]},
      { tipo: "white",   texto: "};" },
      { tipo: "white",   texto: "stack.deploy(); " },
      { tipo: "comment", texto: "// vai à mesa em 10min" }
    ]
  },

  "bacon": {
    nome:      "Bacon#",
    categoria: "Hamburguer",
    preco:     "R$ 25,99;",
    imagem:    "img/produtos/bacon.png",
    codigo: [
      { tipo: "comment", texto: "// Bacon.cs — nível de crocância: MAX" },
      { tipo: "inline",  partes: [
        { tipo: "keyword", texto: "public class" },
        { tipo: "white",   texto: " Bacon : Ingredient {" }
      ]},
      { tipo: "inline",  partes: [
        { tipo: "keyword", texto: "  public string" },
        { tipo: "white",   texto: " Texture   = " },
        { tipo: "string",  texto: '"Crocante"' },
        { tipo: "white",   texto: ";" }
      ]},
      { tipo: "inline",  partes: [
        { tipo: "keyword", texto: "  public int" },
        { tipo: "white",   texto: "    Fatias    = " },
        { tipo: "number",  texto: "3" },
        { tipo: "white",   texto: ";" }
      ]},
      { tipo: "inline",  partes: [
        { tipo: "keyword", texto: "  public bool" },
        { tipo: "white",   texto: "   Viciante  => " },
        { tipo: "number",  texto: "true" },
        { tipo: "white",   texto: ";" }
      ]},
      { tipo: "comment", texto: "  // loop infinito de prazer" },
      { tipo: "white",   texto: "}" }
    ]
  },

  // ════════════════════════════════════════
  // PIZZAS
  // ════════════════════════════════════════

  "phpizza": {
    nome:      "PHPizza",
    categoria: "Pizza",
    preco:     "R$ 29,99;",
    imagem:    "img/produtos/PHPizza.png",
    codigo: [
      { tipo: "comment", texto: "<?php // assada no forno a lenha 🍕" },
      { tipo: "inline",  partes: [
        { tipo: "keyword", texto: "$ingredientes" },
        { tipo: "white",   texto: " = [" }
      ]},
      { tipo: "string",  texto: '  "Pepperoni_artesanal"' },
      { tipo: "string",  texto: '  "Mussarela_derretida"' },
      { tipo: "string",  texto: '  "Molho_caseiro"' },
      { tipo: "white",   texto: "];" },
      { tipo: "inline",  partes: [
        { tipo: "keyword", texto: "foreach" },
        { tipo: "white",   texto: " (" },
        { tipo: "keyword", texto: "$ingredientes" },
        { tipo: "keyword", texto: " as" },
        { tipo: "keyword", texto: " $i" },
        { tipo: "white",   texto: ") " },
        { tipo: "keyword", texto: "echo" },
        { tipo: "white",   texto: " $i;" }
      ]},
      { tipo: "comment", texto: "// SatisfactionLevel: 10/10 🍕" }
    ]
  },

  "queijo-fullstack": {
    nome:      "Queijo Fullstack",
    categoria: "Pizza",
    preco:     "R$ 31,99;",
    imagem:    "img/produtos/queijo-fullstack.png",
    codigo: [
      { tipo: "comment", texto: "// 4 queijos para dominar a stack" },
      { tipo: "inline",  partes: [
        { tipo: "keyword", texto: "const" },
        { tipo: "white",   texto: " queijos = {" }
      ]},
      { tipo: "inline",  partes: [
        { tipo: "white",   texto: "  frontend:  " },
        { tipo: "string",  texto: '"Mussarela"' },
        { tipo: "white",   texto: "," }
      ]},
      { tipo: "inline",  partes: [
        { tipo: "white",   texto: "  backend:   " },
        { tipo: "string",  texto: '"Parmesão"' },
        { tipo: "white",   texto: "," }
      ]},
      { tipo: "inline",  partes: [
        { tipo: "white",   texto: "  database:  " },
        { tipo: "string",  texto: '"Gorgonzola"' },
        { tipo: "white",   texto: "," }
      ]},
      { tipo: "inline",  partes: [
        { tipo: "white",   texto: "  devOps:    " },
        { tipo: "string",  texto: '"Provolone"' }
      ]},
      { tipo: "white",   texto: "};" },
      { tipo: "comment", texto: "// blend irresistível 🧀" }
    ]
  },

  "javarita": {
    nome:      "Javarita",
    categoria: "Pizza",
    preco:     "R$ 33,99;",
    imagem:    "img/produtos/javarita.png",
    codigo: [
      { tipo: "comment", texto: "// Marguerita.java — clássico que compila" },
      { tipo: "inline",  partes: [
        { tipo: "keyword", texto: "String" },
        { tipo: "white",   texto: " molho   = " },
        { tipo: "string",  texto: '"Tomate San Marzano"' },
        { tipo: "white",   texto: ";" }
      ]},
      { tipo: "inline",  partes: [
        { tipo: "keyword", texto: "String" },
        { tipo: "white",   texto: " queijo  = " },
        { tipo: "string",  texto: '"Mussarela de Búfala"' },
        { tipo: "white",   texto: ";" }
      ]},
      { tipo: "inline",  partes: [
        { tipo: "keyword", texto: "String" },
        { tipo: "white",   texto: " aroma   = " },
        { tipo: "string",  texto: '"Manjericão fresco"' },
        { tipo: "white",   texto: ";" }
      ]},
      { tipo: "inline",  partes: [
        { tipo: "white",   texto: "forno.assar(" },
        { tipo: "number",  texto: "400" },
        { tipo: "white",   texto: ", " },
        { tipo: "string",  texto: '"celsius"' },
        { tipo: "white",   texto: ");" }
      ]},
      { tipo: "comment", texto: "// Build: SUCCESS 🍕" }
    ]
  },

  "frango-catupy": {
    nome:      "Frango com CatuPy",
    categoria: "Pizza",
    preco:     "R$ 28,99;",
    imagem:    "img/produtos/frango-com-catupy.png",
    codigo: [
      { tipo: "comment", texto: "# frango_catupiry.py — comfort food" },
      { tipo: "inline",  partes: [
        { tipo: "keyword", texto: "def" },
        { tipo: "white",   texto: " montar_pizza():" }
      ]},
      { tipo: "white",   texto: "  recheio = {" },
      { tipo: "inline",  partes: [
        { tipo: "string",  texto: '    "frango"' },
        { tipo: "white",   texto: ": " },
        { tipo: "string",  texto: '"desfiado_temperado"' },
        { tipo: "white",   texto: "," }
      ]},
      { tipo: "inline",  partes: [
        { tipo: "string",  texto: '    "catupiry"' },
        { tipo: "white",   texto: ": " },
        { tipo: "string",  texto: '"cremoso_original"' }
      ]},
      { tipo: "white",   texto: "  }" },
      { tipo: "inline",  partes: [
        { tipo: "keyword", texto: "  return" },
        { tipo: "white",   texto: " recheio.assar(graus=" },
        { tipo: "number",  texto: "380" },
        { tipo: "white",   texto: ")" }
      ]},
      { tipo: "comment", texto: "# status: delicioso 🐔" }
    ]
  },

  // ════════════════════════════════════════
  // BEBIDAS
  // ════════════════════════════════════════

  "soft-cpp": {
    nome:      "Soft.cpp",
    categoria: "Bebida",
    preco:     "R$ 05,99;",
    imagem:    "img/produtos/soft-cpp.png",
    codigo: [
      { tipo: "comment", texto: "// bebida_gelada.cpp — #include <gelo>" },
      { tipo: "inline",  partes: [
        { tipo: "keyword", texto: "vector" },
        { tipo: "white",   texto: "<string> sabores = {" }
      ]},
      { tipo: "string",  texto: '  "Coca-Cola"' },
      { tipo: "string",  texto: '  "Guaraná Antarctica"' },
      { tipo: "string",  texto: '  "Fanta Laranja"' },
      { tipo: "white",   texto: "};" },
      { tipo: "inline",  partes: [
        { tipo: "keyword", texto: "for" },
        { tipo: "white",   texto: " (auto& s : sabores)" }
      ]},
      { tipo: "white",   texto: "  copo.addGelo(s).servir();" },
      { tipo: "comment", texto: "// temperatura: -2°C ❄️" }
    ]
  },

  "suco-git": {
    nome:      "Suco-Git",
    categoria: "Bebida",
    preco:     "R$ 04,99;",
    imagem:    "img/produtos/suco-git.png",
    codigo: [
      { tipo: "comment", texto: "# versionamento de sabor 🍊" },
      { tipo: "inline",  partes: [
        { tipo: "keyword", texto: "git" },
        { tipo: "white",   texto: " checkout -b " },
        { tipo: "string",  texto: "laranja_fresca" }
      ]},
      { tipo: "inline",  partes: [
        { tipo: "keyword", texto: "git" },
        { tipo: "white",   texto: " add gelo acucar hortelã" }
      ]},
      { tipo: "inline",  partes: [
        { tipo: "keyword", texto: "git" },
        { tipo: "white",   texto: " commit -m " },
        { tipo: "string",  texto: '"suco extraído com sucesso"' }
      ]},
      { tipo: "inline",  partes: [
        { tipo: "keyword", texto: "git" },
        { tipo: "white",   texto: " push origin " },
        { tipo: "string",  texto: "copo_gelado" }
      ]},
      { tipo: "comment", texto: "# Pull request: APROVADO ✅" }
    ]
  },

  "java-coffee": {
    nome:      "Java Coffee",
    categoria: "Bebida",
    preco:     "R$ 02,99;",
    imagem:    "img/produtos/java-coffee.png",
    codigo: [
      { tipo: "comment", texto: "// JavaCoffee.java — combustível do dev ☕" },
      { tipo: "inline",  partes: [
        { tipo: "keyword", texto: "while" },
        { tipo: "white",   texto: " (!brain.isWorking()) {" }
      ]},
      { tipo: "inline",  partes: [
        { tipo: "white",   texto: "  Cup c = " },
        { tipo: "keyword", texto: "new" },
        { tipo: "white",   texto: " Cup(" },
        { tipo: "string",  texto: '"Expresso Duplo"' },
        { tipo: "white",   texto: ");" }
      ]},
      { tipo: "inline",  partes: [
        { tipo: "white",   texto: "  c.addSugar(" },
        { tipo: "number",  texto: "0" },
        { tipo: "white",   texto: "); " },
        { tipo: "comment", texto: "// programmers 😅" }
      ]},
      { tipo: "white",   texto: "  me.drink(c); " },
      { tipo: "white",   texto: "}" },
      { tipo: "comment", texto: "// heapSpace: FULL ☕" }
    ]
  },

  "agua": {
    nome:      "index.html",
    categoria: "Bebida",
    preco:     "R$ 01,99;",
    imagem:    "img/produtos/agua.png",
    codigo: [
      { tipo: "comment", texto: "<!-- H2O: o elemento mais puro 💧 -->" },
      { tipo: "white",   texto: "<!DOCTYPE água>" },
      { tipo: "inline",  partes: [
        { tipo: "keyword", texto: "<html" },
        { tipo: "white",   texto: " lang=" },
        { tipo: "string",  texto: '"hidratação"' },
        { tipo: "keyword", texto: ">" }
      ]},
      { tipo: "inline",  partes: [
        { tipo: "keyword", texto: "  <body" },
        { tipo: "white",   texto: " class=" },
        { tipo: "string",  texto: '"bem-gelada"' },
        { tipo: "keyword", texto: ">" }
      ]},
      { tipo: "white",   texto: "    <h1>Mineral Natural</h1>" },
      { tipo: "white",   texto: "    <p>500ml • pH 7.2</p>" },
      { tipo: "keyword", texto: "  </body>" },
      { tipo: "keyword", texto: "</html>" }
    ]
  },

  // ════════════════════════════════════════
  // ACOMPANHAMENTOS
  // ════════════════════════════════════════

  "js-fries": {
    nome:      "JS Fries",
    categoria: "Acompanhamento",
    preco:     "R$ 12,99;",
    imagem:    "img/produtos/js-fries.png",
    codigo: [
      { tipo: "comment", texto: "// fries.js — crocância garantida 🍟" },
      { tipo: "inline",  partes: [
        { tipo: "keyword", texto: "const" },
        { tipo: "white",   texto: " fries = " },
        { tipo: "keyword", texto: "Array" },
        { tipo: "white",   texto: "(" },
        { tipo: "number",  texto: "50" },
        { tipo: "white",   texto: ")" }
      ]},
      { tipo: "white",   texto: "  .fill('🍟')" },
      { tipo: "inline",  partes: [
        { tipo: "white",   texto: "  .map(f => f.fry(" },
        { tipo: "number",  texto: "180" },
        { tipo: "white",   texto: "))" }
      ]},
      { tipo: "white",   texto: "  .filter(f => f.isCrunchy());" },
      { tipo: "inline",  partes: [
        { tipo: "keyword", texto: "console" },
        { tipo: "white",   texto: ".log(" },
        { tipo: "string",  texto: '"Status: 200 OK 🍟"' },
        { tipo: "white",   texto: ");" }
      ]},
      { tipo: "comment", texto: "// SatisfactionLevel: OVERFLOW" }
    ]
  },

  "nuggets": {
    nome:      "Nuggets++",
    categoria: "Acompanhamento",
    preco:     "R$ 13,99;",
    imagem:    "img/produtos/nuggets.png",
    codigo: [
      { tipo: "comment", texto: "// nuggets.cpp — dourados e crocantes" },
      { tipo: "inline",  partes: [
        { tipo: "keyword", texto: "Nuggets" },
        { tipo: "white",   texto: " box = Nuggets::create(" },
        { tipo: "number",  texto: "10" },
        { tipo: "white",   texto: ");" }
      ]},
      { tipo: "inline",  partes: [
        { tipo: "white",   texto: "box.season(" },
        { tipo: "string",  texto: '"Tempero Especial"' },
        { tipo: "white",   texto: ");" }
      ]},
      { tipo: "inline",  partes: [
        { tipo: "white",   texto: "box.fry(deepOil, " },
        { tipo: "number",  texto: "180" },
        { tipo: "white",   texto: ", min(" },
        { tipo: "number",  texto: "8" },
        { tipo: "white",   texto: "));" }
      ]},
      { tipo: "inline",  partes: [
        { tipo: "white",   texto: "box.dip(BarbecueSauce::make());" }
      ]},
      { tipo: "inline",  partes: [
        { tipo: "keyword", texto: "return" },
        { tipo: "white",   texto: " box.taste(); " },
        { tipo: "comment", texto: "// DELICIOSO 🍗" }
      ]}
    ]
  },

  "onion": {
    nome:      "Onion.py",
    categoria: "Acompanhamento",
    preco:     "R$ 12,99;",
    imagem:    "img/produtos/onion.png",
    codigo: [
      { tipo: "comment", texto: "# onion_rings.py — camadas de sabor 🧅" },
      { tipo: "inline",  partes: [
        { tipo: "keyword", texto: "def" },
        { tipo: "white",   texto: " preparar(cebola):" }
      ]},
      { tipo: "inline",  partes: [
        { tipo: "white",   texto: "  aneis = cebola.fatilar(" },
        { tipo: "keyword", texto: "espessura" },
        { tipo: "white",   texto: "=" },
        { tipo: "number",  texto: "1" },
        { tipo: "white",   texto: ")" }
      ]},
      { tipo: "inline",  partes: [
        { tipo: "white",   texto: "  aneis.empanar(estilo=" },
        { tipo: "string",  texto: '"artesanal"' },
        { tipo: "white",   texto: ")" }
      ]},
      { tipo: "inline",  partes: [
        { tipo: "white",   texto: "  aneis.fritar(temp=" },
        { tipo: "number",  texto: "180" },
        { tipo: "white",   texto: ")" }
      ]},
      { tipo: "keyword", texto: "  return" },
      { tipo: "white",   texto: " aneis.servir()" },
      { tipo: "comment", texto: "# cada camada: uma surpresa 🧅" }
    ]
  },

  "rust-ica": {
    nome:      "Rust-ica",
    categoria: "Acompanhamento",
    preco:     "R$ 14,99;",
    imagem:    "img/produtos/rust-ica.png",
    codigo: [
      { tipo: "comment", texto: "// rustica.rs — sem erros, só sabor 🥔" },
      { tipo: "inline",  partes: [
        { tipo: "keyword", texto: "fn" },
        { tipo: "white",   texto: " preparar() -> Result<Batata, Error> {" }
      ]},
      { tipo: "inline",  partes: [
        { tipo: "keyword", texto: "  let" },
        { tipo: "white",   texto: " tempero = Blend::of([" },
        { tipo: "string",  texto: '"alho"' },
        { tipo: "white",   texto: ", " },
        { tipo: "string",  texto: '"ervas"' },
        { tipo: "white",   texto: "]);" }
      ]},
      { tipo: "inline",  partes: [
        { tipo: "keyword", texto: "  let" },
        { tipo: "white",   texto: " batata  = Rustica::new(" },
        { tipo: "string",  texto: '"Crocante"' },
        { tipo: "white",   texto: ");" }
      ]},
      { tipo: "inline",  partes: [
        { tipo: "white",   texto: "  batata.assar(temp: " },
        { tipo: "number",  texto: "220" },
        { tipo: "white",   texto: ", min: " },
        { tipo: "number",  texto: "40" },
        { tipo: "white",   texto: ")?;" }
      ]},
      { tipo: "inline",  partes: [
        { tipo: "keyword", texto: "  Ok" },
        { tipo: "white",   texto: "(batata) " },
        { tipo: "comment", texto: "// Safe AND Tasty 🥔" }
      ]},
      { tipo: "white",   texto: "}" }
    ]
  }

};
