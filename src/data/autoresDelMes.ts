// --- IMPORTACIONES DE TIPO Y DATOS ---
import autoresData from './autores.json'; // Importa los datos crudos del JSON

// --- IMPORTACIÓN DE IMÁGENES ---
import david from '../assets/images/david.jpg';
import dostoyevsky from '../assets/images/dostoyevsky.jpg';

// --- INTERFACES ---

/**
 * Interfaz para los datos *finales* del autor que usare.
 */
export interface AutorDelMes {
    mes: number;
    nombre: string;
    imagen: string;
    cita: string;
    descripcion: string;
}

/**
 * Interfaz para los datos *crudos* tal como vienen de autores.json.
 * 'imagen' es solo un string (el nombre del archivo).
 */
interface RawAutor {
    mes: number;
    nombre: string;
    imagen: string; // <-- El nombre del archivo
    cita: string;
    descripcion: string;
}

// --- MAPA DE CONEXIÓN ---
// Este objeto conecta el string del JSON (ej: "david.jpg") 
// con la *ruta* (string) de la imagen importada (ej: david.src).
const imagenMap: Record<string, string> = {
    'david.jpg': david.src,
    'dostoyevsky.jpg': dostoyevsky.src,
};

// --- LÓGICA DE ENSAMBLAJE ---
// 1. Le decimos a TypeScript que 'autoresData' es un array de 'RawAutor'
const rawData: RawAutor[] = autoresData as RawAutor[];

// 2. Mapeamos los datos crudos para crear el array final
export const autoresDelMes: AutorDelMes[] = rawData.map(rawAutor => {
    // Busca la *ruta* de la imagen usando el nombre de archivo del JSON
    const imagenPath = imagenMap[rawAutor.imagen];

    return {
        ...rawAutor,
        // Reemplaza el string 'imagen' (ej: "david.jpg") 
        // con el string de la ruta procesada
        imagen: imagenPath || rawAutor.imagen, // Si no se encuentra, usa el string como fallback
    };
});

// --- FUNCIONES DE AYUDA ---

// Función para obtener el autor del mes actual
export function obtenerAutorActual(): AutorDelMes | null {
    const mesActual = new Date().getMonth() + 1; // getMonth() devuelve 0-11
    
    // Primero, intenta encontrar el autor para el mes actual
    const autorEncontrado = autoresDelMes.find(autor => autor.mes === mesActual);
    
    // Si se encuentra, devuélvelo.
    if (autorEncontrado) {
        return autorEncontrado;
    }
    
    // Si no (por ejemplo, es un mes sin autor), 
    // devuelve el primer autor de la lista como fallback.
    // Si la lista está vacía, devuelve null.
    return autoresDelMes[0] || null;
}