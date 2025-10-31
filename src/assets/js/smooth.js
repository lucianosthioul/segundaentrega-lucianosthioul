// Previene el scroll automático ANTES de que ocurra
if (window.location.hash) {
    // Guarda el hash y límpialo temporalmente
    const hash = window.location.hash.substring(1);
    history.replaceState(null, null, ' '); // Limpia el hash sin recargar
    
    window.addEventListener('load', () => {
        const target = document.getElementById(hash);
        
        if (target) {
            // Restaura el hash en la URL
            history.replaceState(null, null, `#${hash}`);
            
            // Ahora sí, smooth scroll
            setTimeout(() => {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 100);
        }
    });
}

// Desplazamiento suave para enlaces de la misma página
document.querySelectorAll('a[href*="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        
        if (!href || !href.includes('#')) return;
        
        const [url, hash] = href.split('#');
        const currentPath = window.location.pathname;
        
        if (!url || url === currentPath || url === window.location.href.split('#')[0]) {
            e.preventDefault();
            const target = document.getElementById(hash);
            
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});