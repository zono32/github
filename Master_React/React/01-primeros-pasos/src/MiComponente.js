//Importar modulos de React
import React from 'react';

//Funcion del componente

const MiComponente = () => {

    let nombre = "Kinso";
    let email = "kinsote@gmail.com";

    let usuario = {
        nombre: "kinso",
        apellido: "Lafuente",
        email: "kinsote@gmail.com"
    };
    
    return (
        <div className='mi-componente'>
            
            <h2>Componente creado</h2>
            <h3>Datos del usuario:</h3>
            <ul>
                <li>Nombre: {nombre} </li>
                <li>Email: {email} </li>
            </ul>
            <hr /> 

            <p>{JSON.stringify(usuario) /*aqui puedo ver los datos del json*/}</p>
            <ul>
                <li>Nombre: {usuario.nombre} </li>
                <li>Apellido: {usuario.apellido} </li>
                <li>Email: {usuario.email} </li>
            </ul>
            <p>Este es mi primer componente</p>
            <ul>
                    <li>
                        React
                    </li>
                    <li>
                        Angular
                    </li>
                    <li>
                        Vue
                    </li>
                </ul>
            
        </div>
       
    );
};
 //Export
export default MiComponente;