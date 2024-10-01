import Props from "./Props";
import PropsEstilo from "./Props1";

const UsoProps = () => {
    return (
    <>
        <h2>Uso de props</h2>
        <p>Este código es el que se muestra en el navegador, el archivo props.jsx es el componente que se utilizará para demostrar este uso.</p>
        <p>Los props corresponden a los parametros que se pasan a los componentes para hacerlos más dinamicos, similar a los argumentos de las funciones.</p>
        <p>Ejemplo de props:</p>
        <Props nombre="Juan" />
        <Props nombre="Maria" />
        <Props nombre="Matías" />
        <h3>¿Como funciona?</h3>
        <p>Basicamente, el componente props es unico y se puede reutilizar muchas veces simplemente cambiando el nombre o valor que se desee, lo que hace fácil y rápido trabajar con él.</p>
        <p>También puedes cambiar los estilos de un boton por ejemplo:</p>
        <PropsEstilo color="blue" />
        <PropsEstilo color="red" />
        <PropsEstilo color="green" />
    </>
    )
  }

export default UsoProps