// Data de início do relacionamento (AJUSTE AQUI PARA SUA DATA)
const startDate = new Date('2020-03-15T00:00:00');

// Função para criar partículas
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 6 + 's';
        particle.style.animationDuration = (Math.random() * 3 + 3) + 's';
        particlesContainer.appendChild(particle);
    }
}

// Função para criar corações flutuantes
function createFloatingHeart(x, y) {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.innerHTML = '❤️';
    heart.style.left = x + 'px';
    heart.style.top = y + 'px';
    document.getElementById('floatingHearts').appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 4000);
}

// Função para atualizar o contador de tempo
function updateCounter() {
    const now = new Date();
    const diff = now - startDate;

    const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
    const months = Math.floor((diff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
    const days = Math.floor((diff % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById('years').textContent = years;
    document.getElementById('months').textContent = months;
    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
}

// Função para scroll suave
function scrollToContent() {
    document.querySelector('.content').scrollIntoView({ 
        behavior: 'smooth' 
    });
}

// Event listeners
document.addEventListener('click', function(e) {
    createFloatingHeart(e.clientX, e.clientY);
});

// Inicialização
document.addEventListener('DOMContentLoaded', function() {
    createParticles();
    updateCounter();
    setInterval(updateCounter, 1000);

    // Criar corações aleatórios periodicamente
    setInterval(() => {
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        createFloatingHeart(x, y);
    }, 3000);
});

// Animação de entrada para os itens da timeline
function observeTimelineItems() {
    const items = document.querySelectorAll('.timeline-item');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    items.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(50px)';
        item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(item);
    });
}

// Inicializar observador após carregar a página
window.addEventListener('load', observeTimelineItems);