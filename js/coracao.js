// Seleciona todos os ícones de coração
const hearts = document.querySelectorAll('.heart-icon');

hearts.forEach(heart => {
    heart.addEventListener('click', function() {
        // Verifica se a imagem atual é a do coração vazio
        if (this.src.includes('coracao-vazio.png')) {
            this.src = 'img/coracao-cheio.png';
            this.alt = 'coracao cheio';
        } else {
            this.src = 'img/coracao-vazio.png';
            this.alt = 'coracao vazio';
        }
    });
});