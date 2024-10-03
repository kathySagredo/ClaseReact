import React, {useState} from "react";
// Importante importar useState


function UsoState(){
    const [contador, setContador] = useState(0)
    // const [estado, setEstado] = useState(valorInicial)
    /* estado = vairiable que contiene valor actual */
    /* setEstado = Función para actualizar el estado*/
    /* valorInicial = es el valor inicial del estado */


    return(
        <div>
            <h2>Uso de Estados</h2>
            <p>El estado es una fuente de datos que React utiliza para renderizar dinámicamente la interfaz. Cuando el estado cambia, React vuelve a renderizar el componente para reflejar los cambios.</p>
            <h3>¿Qué hace useState?</h3>
            <p>El hook useState permite agregar y gestionar el estado local dentro de un componente funcional.</p>
            <p>Contador: {contador}</p>
            {/* En este caso la función se encuentra expresada aquí, para funciones más complejas se puede crear antes y llamarlas mediante onClick */}
            <button type="button" onClick={() => setContador(contador + 1)}>Incrementar</button>
            <button onClick={() => setContador(contador - 1)}>Disminuir</button>
        </div>
    )
}

export default UsoState