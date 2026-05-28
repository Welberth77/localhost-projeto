// Seleciona os botões
const toggleFonte = document.getElementById('toggleFonte');
const aumentarFonte = document.getElementById('aumentarFonte');
const diminuirFonte = document.getElementById('diminuirFonte');

let tamanhoFonte = 14;

const tamanhoMinimo = 12;
const tamanhoMaximo = 18;

// Atualiza botões
function atualizarBotoes() {

    aumentarFonte.disabled = tamanhoFonte >= tamanhoMaximo;

    diminuirFonte.disabled = tamanhoFonte <= tamanhoMinimo;

}

// Atualiza fonte
function atualizarFonte() {

    document.querySelectorAll(
        '.code-descricao, .texto-descricao, .nav-tab, h2, h3'
    )
    .forEach(item => {

        if(item.classList.contains('code-descricao')){
            item.style.fontSize = (tamanhoFonte - 6) + 'px';
        }

        else if(item.tagName === 'H2'){
            item.style.fontSize = (tamanhoFonte + 3) + 'px';
        }

        else if(item.tagName === 'H3'){
            item.style.fontSize = (tamanhoFonte + 10) + 'px';
        }

        else{
            item.style.fontSize = tamanhoFonte + 'px';
        }

    });

    atualizarBotoes();
}

// Modo leitura
toggleFonte.addEventListener('click', () => {
    document.body.classList.toggle('modo-leitura');
});

// Aumentar fonte
aumentarFonte.addEventListener('click', () => {

    if(tamanhoFonte < tamanhoMaximo){

        tamanhoFonte += 2;

        atualizarFonte();
    }

});

// Diminuir fonte
diminuirFonte.addEventListener('click', () => {

    if(tamanhoFonte > tamanhoMinimo){

        tamanhoFonte -= 2;

        atualizarFonte();
    }

});

// Inicia estado correto
atualizarBotoes();