function toggleContraste() {
    const ativo = document.body.classList.toggle('alto-contraste');
    localStorage.setItem('altoContraste', ativo);

    const btn = document.getElementById('btn-contraste');
    btn.setAttribute('aria-pressed', ativo);
    btn.title = ativo ? 'Desativar alto contraste' : 'Ativar alto contraste';

    // Logo das páginas do cardápio
    const logoCardapio = document.querySelector('.header-logo-card img');
    if (logoCardapio) {
        logoCardapio.src = ativo ? 'img/localhost_2.png' : 'img/localhost_1.png';
    }

    // Logo das páginas de detalhe
    const logoDetalhe = document.querySelector('.header-logo');
    if (logoDetalhe) {
        logoDetalhe.src = ativo ? 'img/localhost_2.png' : 'img/logo-localhost.png';
    }
}