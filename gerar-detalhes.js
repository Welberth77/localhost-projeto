const fs = require('fs');
const base = 'C:/Users/paulu/OneDrive/Documentos/NEW LIFE/INTERFACE HUMANO COMPUTADOR/cardapiolocalhost';

const produtos = {
  'cpp-burguer':       { nome:'C++ Burguer',       categoria:'Hamburguer',     preco:'R$ 28,99;', imagem:'img/produtos/c++burguer.png',         voltar:'hamburgueres.html'    },
  'pyburguer':         { nome:'PyBurguer',          categoria:'Hamburguer',     preco:'R$ 22,99;', imagem:'img/produtos/pyburguer.png',           voltar:'hamburgueres.html'    },
  'fullstack-burguer': { nome:'Fullstack Burguer',  categoria:'Hamburguer',     preco:'R$ 34,99;', imagem:'img/produtos/fullstack-burguer.png',   voltar:'hamburgueres.html'    },
  'bacon':             { nome:'Bacon#',             categoria:'Hamburguer',     preco:'R$ 25,99;', imagem:'img/produtos/bacon.png',               voltar:'hamburgueres.html'    },
  'phpizza':           { nome:'PHPizza',            categoria:'Pizza',          preco:'R$ 29,99;', imagem:'img/produtos/PHPizza.png',             voltar:'pizzas.html'          },
  'queijo-fullstack':  { nome:'Queijo Fullstack',   categoria:'Pizza',          preco:'R$ 31,99;', imagem:'img/produtos/queijo-fullstack.png',    voltar:'pizzas.html'          },
  'javarita':          { nome:'Javarita',           categoria:'Pizza',          preco:'R$ 33,99;', imagem:'img/produtos/javarita.png',            voltar:'pizzas.html'          },
  'frango-catupy':     { nome:'Frango com CatuPy',  categoria:'Pizza',          preco:'R$ 28,99;', imagem:'img/produtos/frango-com-catupy.png',   voltar:'pizzas.html'          },
  'soft-cpp':          { nome:'Soft.cpp',           categoria:'Bebida',         preco:'R$ 05,99;', imagem:'img/produtos/soft-cpp.png',            voltar:'bebidas.html'         },
  'suco-git':          { nome:'Suco-Git',           categoria:'Bebida',         preco:'R$ 04,99;', imagem:'img/produtos/suco-git.png',            voltar:'bebidas.html'         },
  'java-coffee':       { nome:'Java Coffee',        categoria:'Bebida',         preco:'R$ 02,99;', imagem:'img/produtos/java-coffee.png',         voltar:'bebidas.html'         },
  'agua':              { nome:'index.html',         categoria:'Bebida',         preco:'R$ 01,99;', imagem:'img/produtos/agua.png',                voltar:'bebidas.html'         },
  'js-fries':          { nome:'JS Fries',           categoria:'Acompanhamento', preco:'R$ 12,99;', imagem:'img/produtos/js-fries.png',            voltar:'acompanhamentos.html' },
  'nuggets':           { nome:'Nuggets++',          categoria:'Acompanhamento', preco:'R$ 13,99;', imagem:'img/produtos/nuggets.png',             voltar:'acompanhamentos.html' },
  'onion':             { nome:'Onion.py',           categoria:'Acompanhamento', preco:'R$ 12,99;', imagem:'img/produtos/onion.png',               voltar:'acompanhamentos.html' },
  'rust-ica':          { nome:'Rust-ica',           categoria:'Acompanhamento', preco:'R$ 14,99;', imagem:'img/produtos/rust-ica.png',            voltar:'acompanhamentos.html' },
};

const codigos = {
  'cpp-burguer': `<span class="c-comment">// AVISO: pode causar overflow de satisfação</span>
<span class="c-keyword">class</span> Burger : <span class="c-keyword">public</span> Satisfaction {
  <span class="c-keyword">double</span> carne    = <span class="c-number">180.0</span><span class="c-comment">; // smash blend</span>
  <span class="c-keyword">string</span> molho    = <span class="c-string">"segredo_da_casa"</span>;
  <span class="c-keyword">bool</span>   artesanal = <span class="c-number">true</span>;
  <span class="c-comment">// WARNING: altamente viciante</span>
};`,

  'pyburguer': `<span class="c-comment"># hamburguer.py — versão artesanal 🐍</span>
<span class="c-keyword">def</span> montar_burguer():
  ingredientes = [
    <span class="c-string">"brioche_tostado"</span>,
    <span class="c-string">"carne_180g_smash"</span>,
    <span class="c-string">"cheddar_derretido"</span>,
    <span class="c-string">"molho_secreto"</span>
  ]
  <span class="c-keyword">return</span> sum(ingredientes)
<span class="c-comment"># retorno garantido: satisfação</span>`,

  'fullstack-burguer': `<span class="c-comment">// frontend + backend + banco de dados</span>
<span class="c-keyword">const</span> stack = {
  top:    <span class="c-string">"Pão brioche"</span>,
  layers: [<span class="c-string">"2x Carne"</span>, <span class="c-string">"Ovo"</span>, <span class="c-string">"Bacon"</span>],
  db:     <span class="c-string">"Queijo fundido"</span>,
  status: <span class="c-number">200</span> <span class="c-comment">// OK: Delicioso</span>
};
stack.deploy(); <span class="c-comment">// vai à mesa em 10min</span>`,

  'bacon': `<span class="c-comment">// Bacon.cs — nível de crocância: MAX</span>
<span class="c-keyword">public class</span> Bacon : Ingredient {
  <span class="c-keyword">public string</span> Texture  = <span class="c-string">"Crocante"</span>;
  <span class="c-keyword">public int</span>    Fatias   = <span class="c-number">3</span>;
  <span class="c-keyword">public bool</span>   Viciante => <span class="c-number">true</span>;
  <span class="c-comment">// loop infinito de prazer</span>
}`,

  'phpizza': `<span class="c-comment">&lt;?php // assada no forno a lenha 🍕</span>
<span class="c-keyword">$ingredientes</span> = [
  <span class="c-string">"Pepperoni_artesanal"</span>,
  <span class="c-string">"Mussarela_derretida"</span>,
  <span class="c-string">"Molho_caseiro"</span>
];
<span class="c-keyword">foreach</span> (<span class="c-keyword">$ingredientes</span> <span class="c-keyword">as</span> <span class="c-keyword">$i</span>) <span class="c-keyword">echo</span> $i;
<span class="c-comment">// SatisfactionLevel: 10/10</span>`,

  'queijo-fullstack': `<span class="c-comment">// 4 queijos para dominar a stack 🧀</span>
<span class="c-keyword">const</span> queijos = {
  frontend:  <span class="c-string">"Mussarela"</span>,
  backend:   <span class="c-string">"Parmesão"</span>,
  database:  <span class="c-string">"Gorgonzola"</span>,
  devOps:    <span class="c-string">"Provolone"</span>
};
<span class="c-comment">// blend irresistível 🧀</span>`,

  'javarita': `<span class="c-comment">// Marguerita.java — clássico que compila</span>
<span class="c-keyword">String</span> molho  = <span class="c-string">"Tomate San Marzano"</span>;
<span class="c-keyword">String</span> queijo = <span class="c-string">"Mussarela de Búfala"</span>;
<span class="c-keyword">String</span> aroma  = <span class="c-string">"Manjericão fresco"</span>;
forno.assar(<span class="c-number">400</span>, <span class="c-string">"celsius"</span>);
<span class="c-comment">// Build: SUCCESS 🍕</span>`,

  'frango-catupy': `<span class="c-comment"># frango_catupiry.py — comfort food 🐔</span>
<span class="c-keyword">def</span> montar_pizza():
  recheio = {
    <span class="c-string">"frango"</span>  : <span class="c-string">"desfiado_temperado"</span>,
    <span class="c-string">"catupiry"</span>: <span class="c-string">"cremoso_original"</span>
  }
  <span class="c-keyword">return</span> recheio.assar(graus=<span class="c-number">380</span>)
<span class="c-comment"># status: delicioso</span>`,

  'soft-cpp': `<span class="c-comment">// bebida_gelada.cpp — #include &lt;gelo&gt; ❄️</span>
<span class="c-keyword">vector</span>&lt;string&gt; sabores = {
  <span class="c-string">"Coca-Cola"</span>,
  <span class="c-string">"Guaraná Antarctica"</span>,
  <span class="c-string">"Fanta Laranja"</span>
};
<span class="c-keyword">for</span> (auto&amp; s : sabores)
  copo.addGelo(s).servir();
<span class="c-comment">// temperatura: -2°C</span>`,

  'suco-git': `<span class="c-comment"># versionamento de sabor 🍊</span>
<span class="c-keyword">git</span> checkout -b <span class="c-string">laranja_fresca</span>
<span class="c-keyword">git</span> add gelo acucar hortelã
<span class="c-keyword">git</span> commit -m <span class="c-string">"suco extraído com sucesso"</span>
<span class="c-keyword">git</span> push origin <span class="c-string">copo_gelado</span>
<span class="c-comment"># Pull request: APROVADO ✅</span>`,

  'java-coffee': `<span class="c-comment">// JavaCoffee.java — combustível do dev ☕</span>
<span class="c-keyword">while</span> (!brain.isWorking()) {
  Cup c = <span class="c-keyword">new</span> Cup(<span class="c-string">"Expresso Duplo"</span>);
  c.addSugar(<span class="c-number">0</span>); <span class="c-comment">// programmers 😅</span>
  me.drink(c);
}
<span class="c-comment">// heapSpace: FULL ☕</span>`,

  'agua': `<span class="c-comment">&lt;!-- H2O: o elemento mais puro 💧 --&gt;</span>
&lt;!DOCTYPE água&gt;
<span class="c-keyword">&lt;html</span> lang=<span class="c-string">"hidratação"</span><span class="c-keyword">&gt;</span>
  <span class="c-keyword">&lt;body</span> class=<span class="c-string">"bem-gelada"</span><span class="c-keyword">&gt;</span>
    &lt;h1&gt;Mineral Natural&lt;/h1&gt;
    &lt;p&gt;500ml • pH 7.2&lt;/p&gt;
  <span class="c-keyword">&lt;/body&gt;</span>
<span class="c-keyword">&lt;/html&gt;</span>`,

  'js-fries': `<span class="c-comment">// fries.js — crocância garantida 🍟</span>
<span class="c-keyword">const</span> fries = <span class="c-keyword">Array</span>(<span class="c-number">50</span>)
  .fill(<span class="c-string">'🍟'</span>)
  .map(f =&gt; f.fry(<span class="c-number">180</span>))
  .filter(f =&gt; f.isCrunchy());
<span class="c-keyword">console</span>.log(<span class="c-string">"Status: 200 OK 🍟"</span>);
<span class="c-comment">// SatisfactionLevel: OVERFLOW</span>`,

  'nuggets': `<span class="c-comment">// nuggets.cpp — dourados e crocantes 🍗</span>
Nuggets box = Nuggets::create(<span class="c-number">10</span>);
box.season(<span class="c-string">"Tempero Especial"</span>);
box.fry(deepOil, <span class="c-number">180</span>, min(<span class="c-number">8</span>));
box.dip(BarbecueSauce::make());
<span class="c-keyword">return</span> box.taste(); <span class="c-comment">// DELICIOSO</span>`,

  'onion': `<span class="c-comment"># onion_rings.py — camadas de sabor 🧅</span>
<span class="c-keyword">def</span> preparar(cebola):
  aneis = cebola.fatilar(espessura=<span class="c-number">1</span>)
  aneis.empanar(estilo=<span class="c-string">"artesanal"</span>)
  aneis.fritar(temp=<span class="c-number">180</span>)
  <span class="c-keyword">return</span> aneis.servir()
<span class="c-comment"># cada camada: uma surpresa</span>`,

  'rust-ica': `<span class="c-comment">// rustica.rs — sem erros, só sabor 🥔</span>
<span class="c-keyword">fn</span> preparar() -&gt; Result&lt;Batata, Error&gt; {
  <span class="c-keyword">let</span> tempero = Blend::of([<span class="c-string">"alho"</span>, <span class="c-string">"ervas"</span>]);
  <span class="c-keyword">let</span> batata  = Rustica::new(<span class="c-string">"Crocante"</span>);
  batata.assar(temp: <span class="c-number">220</span>, min: <span class="c-number">40</span>)?;
  <span class="c-keyword">Ok</span>(batata) <span class="c-comment">// Safe AND Tasty</span>
}`,
};

function gerarHTML(id, p) {
  return `<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>LocalHost — ${p.nome}</title>
    <link rel="stylesheet" href="style.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Dosis:wght@600&family=Fira+Code:wght@300;400;500;700&family=Roboto:wght@700&display=swap" rel="stylesheet">
</head>
<body>
    <div class="detalhe-page">

        <header class="detalhe-header">
            <a href="${p.voltar}" class="voltar-btn">Voltar</a>
            <img src="img/logo-localhost.png" alt="Logo LocalHost" class="header-logo">
        </header>

        <div class="produto-imagem-wrapper">
            <img src="${p.imagem}" alt="${p.nome}" class="produto-imagem">
        </div>

        <span class="categoria-badge">${p.categoria}</span>

        <div class="produto-info">
            <h1 class="produto-nome">${p.nome}</h1>
            <span class="produto-preco">${p.preco}</span>
        </div>

        <div class="descricao-section">
            <div class="divider"></div>
            <h2 class="section-title">Descrição do Produto</h2>
            <pre class="code-block">${codigos[id]}</pre>
        </div>

        <div class="commit-section">
            <div class="divider"></div>
            <h2 class="section-title">Commit</h2>
            <textarea class="commit-textarea" placeholder="// commit"></textarea>
        </div>

        <div class="quantidade-section">
            <span class="quantidade-label">Quantidade</span>
            <div class="quantidade-controles">
                <div class="qty-box">
                    <button class="qty-btn" onclick="changeQty(-1)">−</button>
                    <span class="qty-num" id="qty">1</span>
                    <button class="qty-btn" onclick="changeQty(1)">+</button>
                </div>
                <button class="git-add-btn">Git add</button>
            </div>
        </div>

    </div>
    <script>
        let qty = 1;
        const qtyEl = document.getElementById('qty');
        function changeQty(d) {
            qty = Math.max(1, qty + d);
            qtyEl.textContent = qty;
        }
    </script>
</body>
</html>`;
}

let count = 0;
for (const [id, p] of Object.entries(produtos)) {
  const html = gerarHTML(id, p);
  fs.writeFileSync(base + '/detalhe-' + id + '.html', html, 'utf8');
  count++;
  console.log('Criado: detalhe-' + id + '.html');
}
console.log('\nTotal: ' + count + ' páginas criadas com sucesso!');
