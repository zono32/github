import React, { useEffect, useState } from "react";

const AjaxComponet = () => {
  const [usuarios, setUsuarios] = useState([]);

    const [cargando, setCargando] = useState(true);
    
    const [error, setError] = useState("");

  // Genérico / Básico

  const getUsuariosEstaticos = () => {
    setUsuarios([
      {
        id: 1,
        email: "michael.lawson@reqres.in",
        first_name: "Michael",
        last_name: "Lawson",
        avatar: "https://reqres.in/img/faces/7-image.jpg",
      },
      {
        id: 2,
        email: "lindsay.ferguson@reqres.in",
        first_name: "Lindsay",
        last_name: "Ferguson",
        avatar: "https://reqres.in/img/faces/8-image.jpg",
      },
      {
        id: 3,
        email: "tobias.funke@reqres.in",
        first_name: "Tobias",
        last_name: "Funke",
        avatar: "https://reqres.in/img/faces/9-image.jpg",
      },
    ]);
  };

  const getUsuariosAjaxPms = () => {
    fetch("https://reqres.in/api/users?page=1")
      .then((respuesta) => respuesta.json())
      .then(
        (resultadoFinal) => {
          setUsuarios(resultadoFinal.data);
          console.log(usuarios);
        },
        (error) => {
          console.log(error);
        }
      );
  };

    const getUsuariosAjaxAW =  () => {
      
        setTimeout(async () => {
            try {
                const peticion = await fetch("https://reqres.in/api/users?page=1");
                const { data } = await peticion.json();
    
                 setUsuarios(data);
                setCargando(false);
                
            } catch (error) {
                console.log(error);
                setError(error.message)
            }
           
        }, 2000)
    
  };

  useEffect(() => {
    //getUsuariosEstaticos();
    //getUsuariosAjaxPms();
    getUsuariosAjaxAW();
  }, []);
    
    if (error !== "") {
        //Cuando hay algún error
        return (
            <div className="error">{error}</div>
        );
        
    }

    else if (cargando == true) {
      //Cuando está cargando...

        return <div className="cargando">Cargando datos...</div>;

    } else if (cargando ==false && error ==="") {
        //Cuando todo ha ido bien...

        return (
            <div>
            <h2>Listado de Usuarios via Ajax</h2>
            <ol className="usuarios">
                {usuarios.map((usuario) => {
                console.log(usuario);
                return (
                    <li key={usuario.id}>
                        <img src={usuario.avatar} width="80px" />
                        &nbsp;
                    {usuario.first_name} {usuario.last_name}
                    </li>
                );
                })}
            </ol>
            </div>
        );
    };  
};

export default AjaxComponet;
