# Porftolio

Portfolio personal desarrollado con React y Vite.

## Desarrollo

```sh
npm install
npm run dev
```

## Producción

```sh
npm run build
npm run preview
```

En Netlify, utiliza `npm run build` como comando de compilación y `dist` como
directorio de publicación.

La página principal es la aplicación React. La compilación incluye también
`form.html` y los datos de `data/cursos.json` para cargar las certificaciones.

El formulario utiliza Netlify Forms. Antes de desplegar, activa la detección de
formularios en Netlify, en **Forms > Enable form detection**. Tras el despliegue,
los mensajes estarán disponibles en **Forms**. Para recibirlos por correo,
configura una notificación en **Forms > Submission notifications**.
El envío del formulario requiere Netlify y no funciona con `npm run preview`.