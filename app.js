document.addEventListener('DOMContentLoaded', (event) => {
    const sound = document.getElementById("sound");
    const pacman = document.getElementById("pacman");
    const fantasma = document.getElementById("fantasma");

    // Reproducir sonido al cargar
    sound.play().catch(function(error) {
        console.log('Reproducción automática falló.');
    });

    // Evento clic en el fantasma
    fantasma.addEventListener('click', () => {
        // Ocultar el fantasma
        fantasma.style.display = 'none';

        // Mover a Pacman al lugar del fantasma
        pacman.style.position = 'absolute';
        pacman.style.left = fantasma.offsetLeft + 'px';
        pacman.style.top = fantasma.offsetTop + 'px';
    });
});
