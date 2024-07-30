export const GuardarEnStorage = (clave, elemento) => {

    //Conseguir los elementos que tenemos en el localStorage

    let elementos = JSON.parse(localStorage.getItem(clave));
    console.log(elementos);
           
    //Comprobar si es un array

    if (Array.isArray(elementos)) {
        //Añadir un elemento nuevo
        elementos.push(elemento);
    } else {
        //Crear un nuevo array con el nuevo elemento
        elementos = [elemento];
    }

    //guardar en el almacenamiento local
    localStorage.setItem(clave, JSON.stringify(elementos));

    //Devolver objeto guardado
    return elemento        
}