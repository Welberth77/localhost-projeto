/* ==========================================
   Acessibilidade — sobre-acessibilidade.js
   Estende o fonte-acessibilidade.js para os
   elementos específicos da página Sobre Nós
   ========================================== */

document.addEventListener('DOMContentLoaded', function () {

    const tamanhoMinimo = 12;
    const tamanhoMaximo = 18;

    // Pega o tamanho salvo (mesmo localStorage do cardápio)
    let tamanhoFonte = parseInt(localStorage.getItem('tamanhoFonte')) || 14;

    // Aplica modo leitura salvo (já tratado pelo fonte-acessibilidade.js,
    // mas garantimos aqui caso o script carregue antes)
    if (localStorage.getItem('modoLeitura') === 'true') {
        document.body.classList.add('modo-leitura');
    }

    // Elementos específicos da página sobre que precisam de ajuste de fonte
    function atualizarFonteSobre(tamanho) {

        // Títulos de seção (h2 com classe secao-titulo)
        document.querySelectorAll('.secao-titulo').forEach(el => {
            el.style.fontSize = (tamanho + 2) + 'px';
        });

        // H1 do hero
        document.querySelectorAll('.sobre-hero h1').forEach(el => {
            el.style.fontSize = (tamanho + 12) + 'px';
        });

        // Textos corridos (objetivo, sobre-texto)
        document.querySelectorAll('.objetivo-card p, .sobre-texto').forEach(el => {
            el.style.fontSize = tamanho + 'px';
        });

        // Nomes dos membros
        document.querySelectorAll('.membro-nome').forEach(el => {
            el.style.fontSize = tamanho + 'px';
        });

        // Função dos membros e descrição de tech (monospace menor)
        document.querySelectorAll('.membro-funcao, .tech-desc, .terminal-filename').forEach(el => {
            el.style.fontSize = (tamanho - 4) + 'px';
        });

        // Nome das tecnologias
        document.querySelectorAll('.tech-nome').forEach(el => {
            el.style.fontSize = (tamanho - 2) + 'px';
        });

        // Rodapé sobre
        document.querySelectorAll('.sobre-footer p').forEach(el => {
            el.style.fontSize = (tamanho - 3) + 'px';
        });

        // Terminal body (código)
        document.querySelectorAll('.terminal-body').forEach(el => {
            el.style.fontSize = (tamanho - 4) + 'px';
        });

        // Badge
        document.querySelectorAll('.badge').forEach(el => {
            el.style.fontSize = (tamanho - 4) + 'px';
        });
    }

    // Aplica ao carregar a página
    atualizarFonteSobre(tamanhoFonte);

    // Observa mudanças no localStorage feitas pelo fonte-acessibilidade.js
    // (A+ e A- disparam o storage event em outras abas, mas na mesma aba
    //  precisamos interceptar os botões diretamente)
    const btnAumentar = document.getElementById('aumentarFonte');
    const btnDiminuir = document.getElementById('diminuirFonte');

    if (btnAumentar) {
        btnAumentar.addEventListener('click', () => {
            tamanhoFonte = Math.min(tamanhoMaximo, tamanhoFonte + 2);
            atualizarFonteSobre(tamanhoFonte);
        });
    }

    if (btnDiminuir) {
        btnDiminuir.addEventListener('click', () => {
            tamanhoFonte = Math.max(tamanhoMinimo, tamanhoFonte - 2);
            atualizarFonteSobre(tamanhoFonte);
        });
    }

    // Modo leitura — toggle do terminal
    const btnLeitura = document.getElementById('toggleFonte');
    if (btnLeitura) {
        btnLeitura.addEventListener('click', () => {
            // O fonte-acessibilidade.js já faz o toggle da classe,
            // só precisamos re-aplicar as fontes depois da troca
            setTimeout(() => {
                tamanhoFonte = parseInt(localStorage.getItem('tamanhoFonte')) || 14;
                atualizarFonteSobre(tamanhoFonte);
            }, 0);
        });
    }

});