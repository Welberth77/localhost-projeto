const toggleFonte = document.getElementById('toggleFonte');
const aumentarFonte = document.getElementById('aumentarFonte');
const diminuirFonte = document.getElementById('diminuirFonte');

if(toggleFonte && aumentarFonte && diminuirFonte){

    // PEGA VALORES SALVOS
    let tamanhoFonte = parseInt(localStorage.getItem('tamanhoFonte')) || 14;

    let modoLeitura = localStorage.getItem('modoLeitura') === 'true';

    const tamanhoMinimo = 12;
    const tamanhoMaximo = 18;

    // APLICA MODO LEITURA AO ABRIR
    if(modoLeitura){

        document.body.classList.add('modo-leitura');

    }

    // ATUALIZA BOTÕES
    function atualizarBotoes(){

        aumentarFonte.disabled = tamanhoFonte >= tamanhoMaximo;

        diminuirFonte.disabled = tamanhoFonte <= tamanhoMinimo;

    }

    // ATUALIZA FONTES
    function atualizarFonte(){

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

        // SALVA TAMANHO
        localStorage.setItem('tamanhoFonte', tamanhoFonte);

        atualizarBotoes();
    }

    // BOTÃO MODO LEITURA
    toggleFonte.addEventListener('click', () => {

        document.body.classList.toggle('modo-leitura');

        // SALVA ESTADO
        modoLeitura = document.body.classList.contains('modo-leitura');

        localStorage.setItem('modoLeitura', modoLeitura);

    });

    // AUMENTAR FONTE
    aumentarFonte.addEventListener('click', () => {

        if(tamanhoFonte < tamanhoMaximo){

            tamanhoFonte += 2;

            atualizarFonte();

        }

    });

    // DIMINUIR FONTE
    diminuirFonte.addEventListener('click', () => {

        if(tamanhoFonte > tamanhoMinimo){

            tamanhoFonte -= 2;

            atualizarFonte();

        }

    });

    // APLICA AO ENTRAR NA PÁGINA
    atualizarFonte();

}