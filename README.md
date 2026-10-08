# Mercadito · Lista de compras

Lista de compras hecha con React y CSS. Permite agregar productos, marcarlos como comprados y eliminarlos. Este proyecto forma parte de mi práctica para entender cómo manejar un array de objetos en el estado de React.

## Qué puedes hacer

- Agregar productos desde un formulario.
- Recibir un aviso si intentas agregar un producto con el campo vacío.
- Marcar y desmarcar productos como comprados.
- Ver tachados los productos comprados.
- Eliminar un producto por su id.
- Ver un mensaje cuando la lista está vacía.

Los productos se guardan en el estado durante el uso de la página. La lista se pierde al recargarla.

## Qué practiqué

- Manejo de estado con `useState`.
- Un input controlado con `value` y `onChange`.
- Envío del formulario con `onSubmit` y `preventDefault()`.
- Creación de ids con `crypto.randomUUID()`.
- Uso de spread para agregar un objeto a un array nuevo.
- Uso de `map` para actualizar un producto conservando los demás.
- Uso de `filter` para eliminar un producto sin modificar el array original.
- Lectura de `evento.target.checked` para saber si un checkbox está marcado.
- Renderizado de listas con `map` y `key`.

## Cómo se organiza

- `src/App.jsx`: contiene la interfaz, los estados y las funciones para agregar, marcar y eliminar productos.
- `src/index.css`: contiene los estilos de la aplicación.
- `src/main.jsx`: monta la aplicación.

Cada producto tiene un `id`, un `nombre` y un `estado`: `0` para pendiente y `1` para comprado.

## Detalles por mejorar

- El contador rotulado «pendientes» actualmente cuenta todos los productos, incluidos los comprados. Falta calcularlo a partir de los productos con estado `0`.
- La validación rechaza el texto vacío, pero todavía permite un nombre compuesto únicamente por espacios.
- Pasar un booleano directamente a la prop `checked` del checkbox.

## Tecnologías

React, JavaScript, JSX, CSS y Vite. El proyecto también incluye ESLint para revisar el código.

## Ejecutar en local

Necesitas Node.js y npm instalados. Desde la carpeta del proyecto:

```bash
npm install
npm run dev
```

Abre la dirección que Vite muestre en la terminal.

## Otros comandos

```bash
npm run build    # Genera la versión de producción en dist
npm run preview  # Sirve localmente la versión generada
npm run lint     # Revisa el código con ESLint
```

Antes de usar `npm run preview`, ejecuta `npm run build`.
