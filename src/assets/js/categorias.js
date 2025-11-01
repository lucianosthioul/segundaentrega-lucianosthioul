// 1. Declarar las variables aquí (sin asignar)
let searchInput;
let genreFilter;
let sortSelect;
let booksGrid;
let noResults;
let allBooks = [];

// 2. Mover TODAS las asignaciones dentro del DOMContentLoaded
document.addEventListener('DOMContentLoaded', function() {
    // 3. Asignar las variables AQUÍ
    searchInput = document.getElementById('searchInput');
    genreFilter = document.getElementById('genreFilter');
    sortSelect = document.getElementById('sortSelect');
    booksGrid = document.getElementById('booksGrid');
    noResults = document.getElementById('noResults');

    // 4. Añadir "Guardias" (if) por si el script se carga en una página
    //    que no tiene estos elementos (como index.astro)
    
    // Si no hay 'booksGrid', no podemos continuar.
    if (!booksGrid) {
        // console.log("Advertencia: No se encontró 'booksGrid'. El script de filtro no se ejecutará.");
        return; 
    }

    // Obtener todos los libros y almacenarlos
    allBooks = Array.from(document.querySelectorAll('.book-item'));
    
    // Verificar si hay parámetros en la URL
    const urlParams = new URLSearchParams(window.location.search);
    const generoParam = urlParams.get('genero');
    const buscarParam = urlParams.get('buscar');
    
    // Si hay un género en la URL, seleccionarlo (con guardia)
    if (generoParam && genreFilter) {
        genreFilter.value = generoParam;
    }
    
    // Si hay un término de búsqueda en la URL, aplicarlo (con guardia)
    if (buscarParam && searchInput) {
        searchInput.value = buscarParam;
    }
    
    // Agregar event listeners (con guardias)
    if (searchInput) {
        searchInput.addEventListener('input', filterAndSortBooks);
    }
    if (genreFilter) {
        genreFilter.addEventListener('change', filterAndSortBooks);
    }
    if (sortSelect) {
        sortSelect.addEventListener('change', filterAndSortBooks);
    }
    
    // Aplicar filtros iniciales
    filterAndSortBooks();
});

function filterAndSortBooks() {
    // Asegurarse de que las variables existen antes de usarlas
    const searchTerm = searchInput ? searchInput.value.toLowerCase().trim() : '';
    const selectedGenre = genreFilter ? genreFilter.value : '';
    const sortBy = sortSelect ? sortSelect.value : '';

    // Filtrar libros
    let filteredBooks = allBooks.filter(book => {
        const title = book.dataset.title.toLowerCase();
        const author = book.dataset.author.toLowerCase();
        const genres = book.dataset.genre; 

        const matchesSearch = searchTerm === '' || 
            title.includes(searchTerm) || 
            author.includes(searchTerm);

        const matchesGenre = selectedGenre === '' || 
            (genres && genres.split(',').map(g => g.trim()).includes(selectedGenre));

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
    // Si booksGrid o noResults no existen, no hacer nada.
    if (!booksGrid || !noResults) return;

    // Limpiar el grid
    booksGrid.innerHTML = '';

    if (books.length === 0) {
        noResults.classList.remove('hidden');
        booksGrid.classList.add('hidden');
    } else {
        noResults.classList.add('hidden');
        booksGrid.classList.remove('hidden');

        books.forEach(book => {
            const clonedBook = book.cloneNode(true);
            booksGrid.appendChild(clonedBook);
        });
    }
}

function resetFilters() {
    if (searchInput) searchInput.value = '';
    if (genreFilter) genreFilter.value = '';
    if (sortSelect) sortSelect.value = '';
    displayBooks(allBooks);
}