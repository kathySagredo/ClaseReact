import React, {useState, useEffect} from "react";


const Effect = () => {
    const [usuarios, setUsuarios] = useState([]);
    const [variable, setVariable] = useState(0)
    
  
    // Efecto para cargar los datos cuando el componente se monta
    useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => setUsuarios(data));
    }, []); // [] significa que solo se ejecuta una vez, cuando el componente se monta
  
    useEffect(()=>{
        console.log("Se realizó un efecto secundario")
    },[variable]) 

    return (
    <>
    <h2>Uso de useEffect</h2>
    <p>Permite ejecutar código después que el componente se monta o se renderiza. Después que está montado, en general no se ejecutará nada especial a menos que clickeamos un botón o algún evento específico. Pero este use effect permite ejecutarse después del renderizado y será útil para ciertas situaciones: controlar peticiones asíncronas. </p>
    <p>Imagina que cada vez que cambias algo en tu cocina (como abrir una nueva caja de ingredientes), necesitas hacer algo extra, como enviar un mensaje o actualizar una lista. useEffect es como una lista de tareas que debes hacer cada vez que ocurre un cambio específico.</p>
    <h3>La dependencias de useEffect</h3>
    <ul>
        <li>UseEffect sin parámetro de dependencias: Cada vez que se renderiza u ocurre un cambio de estado en el componente entonces useEffect se ejecuta. </li>
        <li>UseEffect con parámetro de dependencias (array vacío): Cuando el arrays es vacio significa que se ejecuta cuando el componente se renderiza la primera vez pero no volverá a ejecutarse cuando se renderiza otra vez. Cuando hay cambio de estado el componente siempre se vuelve a renderizar.</li>
        <li>UseEffect con parámetro de dependencias (array no vacío): Se ejecuta cuando el componente se renderiza la primera vez pero no volverá a ejecutarse cuando se renderiza otra vez a menos que haya algún cambio en la variable dependencia. </li>
    </ul>
    <h3>Ejemplos:</h3>
    <p>En el siguiente ejemplo, se obtiene los datos de usuarios mediante useEffect:</p>
      <div>
        <h4>Usuarios:</h4>
        <ul>
          {usuarios.map(usuario => (
            <li key={usuario.id}>{usuario.name}</li>
          ))}
        </ul>
      </div>
      <p>En el siguiente ejemplo, tenemos un contador, cada vez que se de click en el boton se ejecutará un efecto secundario en la consola:
        <p>{variable}</p>
        <button type="button" onClick={()=> setVariable(variable + 1)}>Incrementar</button>
      </p>
      </>
    );
  };
  
  export default Effect;