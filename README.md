[![](https://raw.githubusercontent.com/DanielSgPz/React-Dizfrute/main/src/assets/img/logos/LOGO-DIZFRUTE.png)]()
¡Bienvenido al repositorio del proyecto de la tienda en línea "Dizfrute"! En este proyecto, he creado una aplicación web utilizando React para simular una tienda en línea de productos. A continuación, te describo las principales características y componentes desarrollados.

# Funcionamiento
[![Video de Funcionamiento](funcionamiento.webm)](funcionamiento.gif)
</video>

# Componentes

## NavBar.jsx
El componente NavBar es la barra de navegación de nuestra aplicación. Contiene un logotipo de "Dizfrute", enlaces a las secciones principales como **"Home"**, **"Productos"** y **"Contáctenos"**. Además, se integra con el componente **CartWidget** para mostrar el carrito de compras y la cantidad de elementos en él.

## ItemListContainer.jsx
El componente ItemListContainer se encarga de mostrar un mensaje de saludo en la página. Este componente es reutilizable y puede recibir una prop llamada greeting para personalizar el mensaje de bienvenida. También permite la carga de los productos en general y grupos de productos.

## CartWidget.jsx
El componente CartWidget representa un ícono de carrito de compras. Se ha integrado con la librería Font Awesome para mostrar un ícono llamativo. Además, muestra una notificación de la cantidad de elementos en el carrito.

## ItemList.jsx
El componente ItemList muestra una lista de productos utilizando el mapeo de datos. Cada producto se representa utilizando el componente Item.

## Item.jsx
El componente Item muestra un producto en particular con su imagen, nombre, descripción, categoría y precio. Además, incluye un botón "Ver" que enlaza a los detalles del producto.

## ItemDetailContainer.jsx
El componente ItemDetailContainer muestra los detalles de un producto específico. Utiliza el componente ItemDetail para mostrar la información detallada del producto.

## ItemDetail.jsx
El componente ItemDetail muestra los detalles de un producto, incluyendo su imagen, nombre, descripción, categoría, precio y la opción de agregarlo al carrito.

## ItemCount.jsx
El componente ItemCount permite al usuario seleccionar la cantidad de productos que desea agregar al carrito. Incluye botones para incrementar y decrementar la cantidad.

## CheckOut.jsx
El componente CheckOut muestra un formulario para que el usuario ingrese sus datos de compra, como nombre, correo electrónico y teléfono. También muestra un resumen de la compra actual y un botón para finalizar la compra.

## Cart.jsx
El componente Cart muestra los productos en el carrito de compras, permite al usuario eliminar productos individualmente y limpiar el carrito. También muestra un resumen de la compra y un enlace para finalizar la compra.

## CartItem.jsx
El componente CartItem representa un elemento individual en el carrito de compras. Muestra la imagen del producto, su nombre, cantidad, precio, subtotal y ofrece la opción de eliminar el elemento del carrito.

## CartContext.js
El archivo CartContext.js define un contexto y un proveedor de contexto para gestionar el carrito de compras y sus operaciones, como agregar, eliminar y limpiar productos.

## App.js
El archivo App.js configura las rutas y la estructura principal de la aplicación utilizando React Router. También utiliza el contexto del carrito de compras proporcionado por CartContext.js.

## Dependencias
He utilizado las siguientes dependencias en el proyecto:

- **@fortawesome/fontawesome-svg-core**
- **@fortawesome/free-regular-svg-icons**
- **@fortawesome/free-solid-svg-icons**
- **@fortawesome/react-fontawesome**

> Estas dependencias son parte de Font Awesome y nos permiten integrar iconos atractivos en nuestra aplicación.

- **Bootstrap**
> He utilizado la versión 5.3.1 de Bootstrap para estilizar la aplicación y hacerla visualmente atractiva.

- **React y react-dom**
> Utilizamos React en su versión 18.2.0 para construir la interfaz de usuario de la aplicación.

## Cómo ejecutar el proyecto
Clona este repositorio en tu máquina local utilizando el comando `git clone [URL del repositorio]`.

Navega a la carpeta del proyecto utilizando `cd [nombre de la carpeta]`.

Instala las dependencias utilizando el comando `npm install`.

Ejecuta la aplicación utilizando `npm start`.

## Contribuciones
¡Estoy abierto a contribuciones! Si deseas colaborar en el proyecto, no dudes en realizar un fork y luego crear una solicitud de extracción con tus mejoras.

Espero que disfrutes explorando el proyecto. ¡Gracias por tu interés!
