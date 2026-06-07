// Garante o registro do plugin de Scroll do GSAP
gsap.registerPlugin(ScrollTrigger);

// ── 1. ANIMAÇÕES DE ENTRADA (HERO) ─────────────────────────────────
window.addEventListener('DOMContentLoaded', () => {
    const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });

    // Anima o badge, título e texto principal sequencialmente
    tl.from('.badge', { opacity: 0, y: -20, duration: 0.6 })
      .from('#titulo-sobre', { opacity: 0, y: 30, duration: 0.8 }, '-=0.4')
      .from('.sobre-texto', { opacity: 0, x: -30, duration: 0.8 }, '-=0.5')
      
      // Efeito de revelação simulando o "boot" do terminal
      .from('.terminal-box', { 
          opacity: 0, 
          scale: 0.95, 
          duration: 0.8, 
          ease: 'back.out(1.7)' 
      }, '-=0.6');
});

// ── 2. ANIMAÇÕES BASEADAS EM SCROLL (SCROLLTRIGGER) ──────────────────

// Seção Objetivo
gsap.from('.objetivo-card', {
    scrollTrigger: {
        trigger: '.objetivo-card',
        start: 'top 85%', // Ativa quando o topo do card chega a 85% da tela
        toggleActions: 'play none none none'
    },
    opacity: 0,
    y: 40,
    duration: 0.8,
    ease: 'power2.out'
});

// Grid de Tecnologias (Efeito Cascata/Stagger)
gsap.from('.tech-item', {
    scrollTrigger: {
        trigger: '.tech-grid',
        start: 'top 80%',
    },
    opacity: 0,
    y: 30,
    duration: 0.6,
    stagger: 0.15, // Delay de 0.15s entre a aparição de cada tecnologia
    ease: 'power1.out'
});

// Lista de Equipe (Efeito Cascata)
gsap.from('.membro-card', {
    scrollTrigger: {
        trigger: '.equipe-lista',
        start: 'top 80%',
    },
    opacity: 0,
    scale: 0.9,
    y: 30,
    duration: 0.7,
    stagger: 0.1, // Delay sutil entre cada integrante
    ease: 'power2.out'
});

// ── 3. EFEITO DE INTERAÇÃO (HOVER DINÂMICO) ─────────────────────────
// Adiciona um leve pulso de feedback ao interagir com as tecnologias
document.querySelectorAll('.tech-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
        gsap.to(item, { scale: 1.05, duration: 0.2, overwrite: 'auto' });
    });
    item.addEventListener('mouseleave', () => {
        gsap.to(item, { scale: 1, duration: 0.2, overwrite: 'auto' });
    });
});