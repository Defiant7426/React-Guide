# GuitarLA

# Estructura

La estructura de un proyecto creado en react con vite es el siguiente:

![Untitled](GuitarLA%203ad4cf263f9940ab9db287c9fcaa2c8a/Untitled.png)

Debemos de preocuparnos principalmente por tres archivos importantes:

- `index.css`: Aplica estilos globales a toda nuestra aplicación.
- `main.jsx`: Es el archivo principal donde se configura y renderiza el componente raíz de React.
- `App.jsx`: Contiene el componente principal de la aplicación donde se estructuran los demás componentes.

# Componentes en React

Los componentes en React son piezas reutilizables de código que representan una parte de la interfaz de usuario. Pueden ser de clase o funcionales, y permiten dividir la aplicación en partes más pequeñas y manejables.

Ejemplo:

```jsx
import React from 'react';

function MiComponente() {
  return (
	  <>Hola, este es un componente funcional en React</>
	  )
}

export default MiComponente;
```

Es como tener HTML y JavaScript en un solo archivo. React utiliza componentes para la creación de aplicaciones y sitios web, que pueden tener la extensión .jsx o .tsx. Un componente usualmente tiene dos propósitos: ser reutilizable o separar la funcionalidad. Un componente siempre contiene un return().

# JSX

JSX es una extensión de sintaxis para JavaScript que permite escribir código similar a HTML dentro de archivos JavaScript. Esto facilita la creación y estructuración de componentes en React. Al utilizar JSX, podemos describir cómo debería verse la interfaz de usuario de una manera más intuitiva y legible.