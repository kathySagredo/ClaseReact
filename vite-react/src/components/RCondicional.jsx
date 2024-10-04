import React, { useState } from 'react';

const RenderCondicional = () => {
  const [esUsuario, setEsUsuario] = useState(true);
  const [mostrar, setMostrar] = useState(false)

  /* Condicional if/else */
  let mensaje;
  if(esUsuario){
    mensaje = <h4>¡Bienvenido de nuevo!</h4>
  } else {
    mensaje = <h4>Por favor, regístrate</h4>
  }

  return (
    <>
    <h2>Renderizado Condicional</h2>
    <p>El renderizado condicional en React te permite mostrar o esconder partes de la interfaz de usuario según ciertas condiciones. Es decir, se renderiza contenido diferente dependiendo del valor de alguna condición lógica.</p>
    <h3>Formas de hacer renderizado condicional en React:</h3>
    <ol>
        <li>Operador ternario: Es una de las formas más comunes.</li>
        <li>&& (AND lógico): Para renderizar algo solo si la condición es verdadera.</li>
        <li>if/else dentro del renderizado</li>
    </ol>

    <h3>Operador ternario (? :)</h3>
    <p>Este es el método más usado para renderizar condicionalmente una parte del componente dependiendo de una expresión booleana.</p>
    <p>Ejemplo:</p>
    <p>En este ejemplo cuando el usuario es true, entonces significa que esta logeado por lo tanto da un mensaje de bienvenida y el boton cambia a al opción de cerrar la sesión, en caso que el usuario sea falso entonces se muestra algo diferente. En este ejemplo se trabaja con manejo de estados, debido que al hacer click en el boton la variable usuario cambia de true a false.</p>
    <p>Para entender mejor lo que es manejo de estado, te recomiendo ir a State.</p>
    <div>
        {/* esUsuario es una variable de estado booleana que comienza siendo true */}
        {/* Si esUsuario es true, se muestra "Bienvenido de nuevo", si no "Por favor, registrate" */}
        <h4>{esUsuario ? "¡Bienvenido de nuevo!" : "Por favor, regístrate"}</h4>
        {/* Al hacer click al usuario se ejecuta la función y cambia estado del usuario a false */}
        <button onClick={() => setEsUsuario(!esUsuario)}>
            {/* Si el esUsuario es true, se muestra la opción de cerrar la sesión, si no inicia la sesión */}
            {esUsuario ? "Cerrar sesión" : "Iniciar sesión"}
        </button>
    </div>
    <h3>Renderizado con && (AND lógico)</h3>
    <p>Puedes usar el operador lógico && para renderizar un componente solo si una condición es verdadera.</p>
    <p>Ejemplo:</p>
    <p>En este ejemplo cuando la variable mostrar es true logra entonces mostrar el mensaje en particular, caso contrario no lo muestra. Para recordar esto es importante repasar lo que son las tablas de la verdad.</p>
    <p>En este ejemplo se utilizó operador ternario para cambiar el nombre del boton.</p>
    <div>
        {/* Al hacer click la variable mostrar cambia al opuesto del booleano actual */}
        <button onClick={() => setMostrar(!mostrar)}>
            {/* Operador ternario, si mostrar es true, el boton da opción de ocultar mensaje, si no da opción de mostrar*/}
            {mostrar ? "Ocultar mensaje" : "Mostrar mensaje"}
        </button>
        {/* Si mostrar es true, se renderiza el párrafo. Si es false, React no renderiza nada. */}
        {mostrar && <p>Este es un mensaje condicional.</p>}
    </div>
    <h3>Renderizado condicional usando if/else</h3>
    <p>Otra forma de hacer renderizado condicional es utilizando un bloque if/else dentro del método render o la función del componente.</p>
    <p>Ejemplo:</p>
    <p>Este ejemplo funciona similar al primer ejemplo, la diferencia es que el mensaje de bienvenida o registrate no se aplicó con operador ternario, si no que se expresó mediante la variable mensaje, el cual irá cambiando a medida que el usuario sea true o false.</p>
    <p>Esto es posible ya que la condicional se hizo previamente al return.</p>
    <div>
        {/* Variable que ira cambiando, condicioal if/else definido arriba */}
        {mensaje}
        <button onClick={() => setEsUsuario(!esUsuario)}>
            {esUsuario ? "Cerrar sesión" : "Iniciar sesión"}
        </button>
    </div>
    </>
  );
};

export default RenderCondicional;
