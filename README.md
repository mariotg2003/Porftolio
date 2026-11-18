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

El formulario envía los mensajes mediante FormSubmit. La primera vez, el
destinatario debe confirmar la activación desde el correo que envía el servicio.