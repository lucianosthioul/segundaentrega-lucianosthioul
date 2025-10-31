/**
 * Función que inicializa un carrusel.
 * Busca los botones y el contenedor HIJOS del 'shell' que se le pasa.
 */
function initializeCarousel(carouselShell) {
  // Busca los elementos DENTRO de este carrusel específico
  const container = carouselShell.querySelector('.carousel-container');
  const prevBtn = carouselShell.querySelector('.carousel-prev');
  const nextBtn = carouselShell.querySelector('.carousel-next');

  // Si no encuentra los 3 elementos, no hace nada
  if (!container || !prevBtn || !nextBtn) {
    console.warn("No se pudo inicializar un carrusel: faltan elementos hijos (.carousel-container, .carousel-prev, o .carousel-next).");
    return;
  }
  
  const moveCarousel = (direction) => {
    // Asume que <Libros modo="carousel"> renderiza items con la clase ".carousel-item"
    const item = container.querySelector('.carousel-item');
    if (!item) {
        console.warn("No se encontró ningún .carousel-item dentro de:", container);
        return; 
    }
    
    const itemWidth = item.offsetWidth;
    // El 16 es por el `space-x-4`
    const scrollAmount = (itemWidth + 16) * direction;
    container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  nextBtn.addEventListener('click', () => moveCarousel(1));
  prevBtn.addEventListener('click', () => moveCarousel(-1));
}

// ---- INICIO AUTOMÁTICO ----
// Cuando el DOM esté cargado...
document.addEventListener('DOMContentLoaded', () => {
  // 1. Busca TODOS los carruseles de la página
  const carruseles = document.querySelectorAll('.carrusel-shell');
  
  // 2. Inicializa cada uno de ellos
  carruseles.forEach(initializeCarousel);
});