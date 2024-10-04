const ListasKeys = () => {
    const frutas = ['Manzana', 'Banana', 'Naranja', 'Fresa'];
    const usuarios = [
        { id: 1, nombre: 'Ana' },
        { id: 2, nombre: 'Luis' },
        { id: 3, nombre: 'Carlos' }
      ];

    return(
        <>
        <h2>Listas y Keys</h2>
        <p>En React, las listas se utilizan para renderizar múltiples elementos de forma dinámica y eficiente, y las keys se usan para ayudar a React a identificar qué elementos han cambiado, agregado o eliminado.</p>
        <h3>Listas en React</h3>
        <p>Cuando necesitas mostrar una colección de elementos, como una lista de tareas o una serie de datos obtenidos de una API, puedes crear una lista en React utilizando el método de array .map() para iterar sobre los elementos y renderizarlos.</p>
        <p>Ejemplo:</p>
        <p>En este ejemplo se tiene un array [manzana, banana, naranja, fresa], el cual se recorre y se imprime una nueva lista por cada elemento del array.</p>
        <ul>
            {/* El método map() itera sobre el array frutas y devuelve un nuevo array de elementos JSX (<li> en este caso).*/}
            {frutas.map((fruta, index) => (
            <li key={index}>{fruta}</li> // Renderizando cada fruta en una lista
            ))}
        </ul>
        <h3>Keys en React</h3>
        <p>Las keys son atributos especiales que debes añadir a los elementos cuando creas listas en React. Son esenciales porque ayudan a React a identificar qué elementos de la lista han cambiado, agregado o eliminado, permitiendo que React renderice de manera más eficiente.</p>
        <p>Cuando no proporcionas keys, React utiliza el índice por defecto, pero esto no es recomendado si los datos de la lista pueden cambiar, ya que puede afectar el rendimiento o causar errores inesperados en el DOM.</p>
        <p>Ejemplo:</p>
        <p>En este caso, hay un arreglo de usuarios donde cada usuario tiene un id unico, se accede a él por notación de puntos key = usuario.id.</p>
        <p>Otra forma de hacerlo es usando un indice del array como key, de esta manera quedaría así, key = index.</p>
        <ul>
            {usuarios.map((usuario) => (
            <li key={usuario.id}>{usuario.nombre}</li> // Asignamos una key única usando el id
            ))}
        </ul>
        </>
    )







}

export default ListasKeys