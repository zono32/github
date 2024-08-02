import React, { useEffect, useRef, useState } from 'react'

export const Ejemplo = () => {

    const [numeroSaludo, setNumeroSaludo] = useState(0);
    const sasludosEnCola = useRef(numeroSaludo);

    useEffect(() => {
        sasludosEnCola.current = numeroSaludo;
        setTimeout(() => {

            console.log('mensajes en cola' + sasludosEnCola.current); 
        }, 2000)
    },[numeroSaludo])

    const enviarSaludo = (e) => {
        setNumeroSaludo(numeroSaludo + 1);
    }
  return (
      <div>
          <h1>Ejemplo con useRef</h1>

          <h2>Saludos enviados: {numeroSaludo}</h2>
          <button onClick={enviarSaludo}>Enviar Saludo!!!</button>

          <hr/>
      </div>
  )
}
