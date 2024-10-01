import React, { Component } from 'react';

// Componente funcional: Funciones que retornan elementos de JSX (JS XML).
// JSX permite escribir HTML dentro de JS 
const Componentes = () => {
    return (
    <>
    <h2>Tipos de componentes</h2>
    <p>Los componentes son funciones que retornan elementos de JSX, JavaScript XML. JSX permite escirbir HTML dentro de JavaScript.</p>
    <p>Existen dos tipos de componentes:</p>
    <ul>
      <li> Componentes funcionales </li>
      <li> Componentes de clase </li>
    </ul>
    </>
  );
} 

// Otra forma de escribir
/* 
function Saludo(){
  return <h1>¡Hola, mundo!</h1>;
}
*/

// Componente de Clase
/*   
class Saludo extends Component {
  render() {
    return <h1>¡Hola, mundo!</h1>;
  }
}  
*/
  
export default Componentes;
