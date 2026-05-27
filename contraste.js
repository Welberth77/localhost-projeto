(function () {
    if (localStorage.getItem('altoContraste') === 'true') {
        document.body.classList.add('alto-contraste');
    }
})();

function toggleContraste() {
    const ativo = document.body.classList.toggle('alto-contraste');
    localStorage.setItem('altoContraste', ativo);

    const btn = document.getElementById('btn-contraste');
    btn.setAttribute('aria-pressed', ativo);
    btn.title = ativo ? 'Desativar alto contraste' : 'Ativar alto contraste';

    // Troca a logo conforme o modo
    const logo = document.querySelector('.header-logo-card img');
    if (logo) {
        logo.src = ativo
            ? 'img/localhost_2.png'
            : 'img/localhost_1.png';
    }
}