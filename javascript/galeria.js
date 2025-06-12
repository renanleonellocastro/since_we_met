document.addEventListener('DOMContentLoaded', function () {
    const params = new URLSearchParams(window.location.search);
    const folder = params.get('id'); // ex: primeiro_encontro
    const titleMap = {
        'primeiro_encontro': 'Primeiro Encontro',
        'construcao_casa': 'Construção da Casa',
        'gravidez': 'Gravidez da Aline',
        'mila_nascimento': 'Nascimento da Mila',
        'nossa_casinha': 'Nossa Casinha',
        'nosso_casamento': 'Nosso Casamento',
        'pedido_de_casamento': 'Pedido de Casamento',
        'primeiro_beijo': 'Primeiro Beijo',
        'primeiros_passos': 'Primeiros Passos da Mila',
    };

    const title = titleMap[folder] || 'Galeria';
    document.getElementById('galeria-title').textContent = title;

    const content = document.getElementById('galeria-content');

    function loadImages(folder, max = 50) {
        for (let i = 1; i <= max; i++) {
            const img = new Image();
            img.src = `../assets/fotos/${folder}/foto${i}.jpg`;
            img.onload = () => {
                img.style.width = '100%';
                img.style.maxWidth = '600px';
                img.style.borderRadius = '15px';
                img.style.marginBottom = '30px';
                content.appendChild(img);
            };
        }
    }

    function loadVideos(folder, max = 10) {
        for (let i = 1; i <= max; i++) {
            const video = document.createElement('video');
            video.src = `../assets/videos/${folder}/video${i}.mp4`;
            video.controls = true;
            video.onloadeddata = () => {
                video.style.width = '100%';
                video.style.maxWidth = '600px';
                video.style.borderRadius = '15px';
                video.style.marginBottom = '30px';
                content.appendChild(video);
            };
        }
    }

    if (folder) {
        loadImages(folder);
        loadVideos(folder);
    } else {
        content.innerHTML = '<p style="text-align:center; color:#666;">Nenhum conteúdo encontrado.</p>';
    }
});
