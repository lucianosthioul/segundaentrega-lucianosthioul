// --- IMPORTACIONES DE TIPO Y DATOS ---
import librosData from './libros.json'; // Importa los datos crudos del JSON

// --- INTERFACES ---
/**
 * Interfaz para los datos *finales* que usará tu aplicación.
 * 'cover' será un string con la ruta procesada a la imagen.
 */
export interface Libro {
  id: number;
  title: string;
  author: string;
  genre: string;
  price: string;
  cover: string; // <-- Solo 'string', simple y directo.
  description: string;
  rating: number;
  pages: number;
  publisher: string;
  language: string;
  publishDate: string;
}

/**
 * Interfaz para los datos *crudos* tal como vienen del JSON.
 * 'cover' es solo un string (el nombre del archivo).
 */
interface RawLibro {
  id: number;
  title: string;
  author: string;
  genre: string;
  price: string;
  cover: string; // <-- La diferencia clave
  description: string;
  rating: number;
  pages: number;
  publisher: string;
  language: string;
  publishDate: string;
}

// --- IMPORTACIÓN DE IMÁGENES ---
import broma from '../assets/images/libros6.jpg';
import leviatan from '../assets/images/libros4.jpeg';
import cronica from '../assets/images/libros3.png';
import cancion from '../assets/images/libros2.jpg';
import karamazov from '../assets/images/libros5.jpg';
import it from '../assets/images/libros1.jpg';
import trilogia from '../assets/images/trilogianuevayork.jpeg';
import cthulhu from '../assets/images/cthulhu.webp';
import morgue from '../assets/images/crimenes.jpg';
import kafka from '../assets/images/libros7.png';
import castigo from '../assets/images/crimenycastigo.webp';
import battle from '../assets/images/battleroyale.webp';
import ender from '../assets/images/ender.jpg';
import androides from '../assets/images/androides.webp';
import dune from '../assets/images/dune.webp';
import larga from '../assets/images/lalargamarcha.jpg';
import corazondelator from '../assets/images/corazondelator.jpg';
import mobydick from '../assets/images/mobydick.webp';
import fausto from '../assets/images/fausto.webp';
import republica from '../assets/images/larepublica.webp';
import palido from '../assets/images/elreypalido.jpg';
import langosta from '../assets/images/hablemos.webp';
import divertido from '../assets/images/algo.jpg';
import repulsivo from '../assets/images/brevesentrevistas.webp';
import agua from '../assets/images/agua.jpg';
import azar from '../assets/images/portada.jpeg';

// --- MAPA DE CONEXIÓN ---
// Este objeto conecta el string del JSON (ej: "broma.jpg") 
// con la *ruta* (string) de la imagen importada (ej: broma.src).
const coverMap: Record<string, string> = {
  'libros6.jpg': broma.src,
  'leviatan.jpg': leviatan.src,
  'cronica.jpg': cronica.src,
  'cancion.jpg': cancion.src,
  'karamazov.jpg': karamazov.src,
  'it.jpg': it.src,
  'trilogia.jpg': trilogia.src,
  'cthulhu.jpg': cthulhu.src,
  'morgue.jpg': morgue.src,
  'kafka.jpg': kafka.src,
  'castigo.jpg': castigo.src,
  'battle.jpg': battle.src,
  'ender.jpg': ender.src,
  'androides.jpg': androides.src,
  'dune.jpg': dune.src,
  'larga.jpg': larga.src,
  'corazondelator.jpg': corazondelator.src,
  'mobydick.jpg': mobydick.src,
  'fausto.jpg': fausto.src,
  'republica.jpg': republica.src,
  'palido.jpg': palido.src,
  'langosta.jpg': langosta.src,
  'divertido.jpg': divertido.src,
  'repulsivo.jpg': repulsivo.src,
  'agua.jpg': agua.src,
  'azar.jpg': azar.src,
};

// --- LÓGICA DE ENSAMBLAJE ---
// 1. Le decimos a TypeScript que 'librosData' es un array de 'RawLibro'
const rawData: RawLibro[] = librosData as RawLibro[];

// 2. Mapeamos los datos crudos para crear el array final
export const todosLosLibros: Libro[] = rawData.map(rawLibro => {
  // Busca la *ruta* de la imagen usando el nombre de archivo del JSON
  const coverImagePath = coverMap[rawLibro.cover]; 
  
  return {
    ...rawLibro,
    // Reemplaza el string 'cover' (ej: "broma.jpg") 
    // con el string de la ruta procesada (ej: '/_astro/broma.aB1cD2.jpg')
    cover: coverImagePath || rawLibro.cover, // Si no se encuentra, usa el string como fallback
  };
});

