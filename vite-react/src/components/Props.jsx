
// Componente props, puede usar cualquier nombre, ejemplo de uso:
// Crear un componente de boton con caracteristicas particulares, todos los botones de la página tendran las mismas caracteristicas.
// Pero el nombre del boton cambia, por lo tanto puedo hacer un props para cambiar a un boton de enviar, uno de eliminar, otro de ver más, etc.

const Props = (props) => {
    return <p>¡Hola, {props.nombre}!</p>;
  }
  
export default Props