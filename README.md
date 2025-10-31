# Chiloebooks astro

## 🚀 Estructura del proyecto

Dentro del proyecto veras los siguientes archivos y carpetas:

```text
/
├── public/
    └── favicon.ico
│   └── favicon.svg
├── src
│   ├── assets
│   │   └── images
│   │   └── js
│   │   └── sql
│   ├── components
│   │   └── AutorDelMes.astro
│   │   └── CarruselEstructura.astro
│   │   └── FooterComponent.astro
│   │   └── HeaderComponent.astro
│   │   └── Banner.astro
│   │   └── Libros.astro
│   ├── data
│   │   └── autores.json
│   │   └── autoresDelMes.ts
│   │   └── ItemMenu.ts
│   │   └── libros.json
│   │   └── libros.ts
│   ├── layouts
│   │   └── Layout.astro
│   └── pages
│   │   └── libro
│   │   │   └── [id].astro
│   │   └── index.astro
│   │   └── catalogo.astro
│   │   └── coleccion-ciencia-ficcion.astro
│   │   └── coleccion-clasicos.astro
│   │   └── coleccion-misterio.astro
│   │   └── contacto.astro
│   │   └── nosotros.astro
│   ├── styles
│   │   └── global.css
└── package.json
```

## 🧞 Comandos

Todos estos comandos se corren desde la raiz del proyecto, desde la terminal:

| Comandos                  | Accion                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Instala dependencias (astro, tailwind, fonts)    |
| `npm run dev`             | Comienza el server local dev en `localhost:4321` |
| `npm run build`           | Buildea la produccion de tu sitio a `./dist/`    |
| `npm run preview`         | Hace un preview de tu build                      |
| `npm run astro ...`       | Corre comandos del CLI `astro add`, `astro check`|
| `npm run astro -- --help` | Consigue ayuda usando el CLI de Astro            |


