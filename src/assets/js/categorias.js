// Variables globales
const searchInput = document.getElementById('searchInput');
const genreFilter = document.getElementById('genreFilter');
const sortSelect = document.getElementById('sortSelect');
const booksGrid = document.getElementById('booksGrid');
const noResults = document.getElementById('noResults');
let allBooks = [];

// Inicializar al cargar la página
document.addEventListener('DOMContentLoaded', function() {
    // Obtener todos los libros y almacenarlos
    allBooks = Array.from(document.querySelectorAll('.book-item'));
    
    // Verificar si hay parámetros en la URL
    const urlParams = new URLSearchParams(window.location.search);
    const generoParam = urlParams.get('genero');
    const buscarParam = urlParams.get('buscar');
    
    // Si hay un género en la URL, seleccionarlo
    if (generoParam) {
        genreFilter.value = generoParam;
    }
    
    // Si hay un término de búsqueda en la URL, aplicarlo
    if (buscarParam) {
        searchInput.value = buscarParam;
    }
    
    // Agregar event listeners
    searchInput.addEventListener('input', filterAndSortBooks);
    genreFilter.addEventListener('change', filterAndSortBooks);
    sortSelect.addEventListener('change', filterAndSortBooks);
    
    // Aplicar filtros iniciales (por si hay parámetros en la URL)
    filterAndSortBooks();
});

function filterAndSortBooks() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    const selectedGenre = genreFilter.value;
    const sortBy = sortSelect.value;

    // Filtrar libros
    let filteredBooks = allBooks.filter(book => {
        const title = book.dataset.title.toLowerCase();
        const author = book.dataset.author.toLowerCase();
        const genres = book.dataset.genre; // Puede contener múltiples géneros

        // Verificar búsqueda por texto
        const matchesSearch = searchTerm === '' || 
            title.includes(searchTerm) || 
            author.includes(searchTerm);

        // Verificar filtro por género (soporta múltiples géneros)
        const matchesGenre = selectedGenre === '' || 
            genres.split(',').map(g => g.trim()).includes(selectedGenre);

        return matchesSearch && matchesGenre;
    });

    // Ordenar libros
    if (sortBy) {
        filteredBooks.sort((a, b) => {
            switch (sortBy) {
                case 'titulo':
                    return a.dataset.title.localeCompare(b.dataset.title);
                case 'autor':
                    return a.dataset.author.localeCompare(b.dataset.author);
                case 'precio':
                    const priceA = parseInt(a.dataset.price);
                    const priceB = parseInt(b.dataset.price);
                    return priceA - priceB;
                default:
                    return 0;
            }
        });
    }

    // Mostrar resultados
    displayBooks(filteredBooks);
}

function displayBooks(books) {
    // Limpiar el grid
    booksGrid.innerHTML = '';

    if (books.length === 0) {
        // Mostrar mensaje de no resultados
        noResults.classList.remove('hidden');
        booksGrid.classList.add('hidden');
    } else {
        // Ocultar mensaje de no resultados
        noResults.classList.add('hidden');
        booksGrid.classList.remove('hidden');

        // Agregar libros filtrados al grid (clonar profundamente para mantener eventos)
        books.forEach(book => {
            // Clonar profundamente para mantener la estructura completa
            const clonedBook = book.cloneNode(true);
            booksGrid.appendChild(clonedBook);
        });
    }
}

function resetFilters() {
    searchInput.value = '';
    genreFilter.value = '';
    sortSelect.value = '';
    displayBooks(allBooks);
}

