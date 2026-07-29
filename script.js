// Renderiza os ícones do Lucide
lucide.createIcons();

// Função de navegação entre seções
function navigate(pageId) {
    document.querySelectorAll('.page-section').forEach(el => {
        el.classList.remove('active');
    });
    
    document.querySelectorAll('.nav-btn').forEach(el => {
        el.classList.remove('text-white');
        if (el.id) el.classList.add('text-gray-500');
    });
    
    document.getElementById(pageId).classList.add('active');
    document.getElementById('nav-' + pageId).classList.remove('text-gray-500');
    document.getElementById('nav-' + pageId).classList.add('text-white');
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Função de alteração de tema (Claro/Escuro)
function toggleTheme() {
    document.body.classList.toggle('light-mode');
    const themeIcon = document.getElementById('theme-icon');

    if (document.body.classList.contains('light-mode')) {
        themeIcon.setAttribute('data-lucide', 'moon');
        themeIcon.classList.replace('text-[#ffaa00]', 'text-[#00e5ff]');
    } else {
        themeIcon.setAttribute('data-lucide', 'sun');
        themeIcon.classList.replace('text-[#00e5ff]', 'text-[#ffaa00]');
    }
    
    lucide.createIcons();
}