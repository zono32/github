import React, { useId } from 'react'

const MiComponente = () => {

    const id = useId();
    const id2 = useId();
    const id3 = useId();

    console.log(id);
    console.log(id2);
    console.log(id3);

  return (
    <div>
          <h1>Hoock useId</h1>
          <input id={id} name='nombre' placeholder='Nombre'/>
    </div>
  )
}

export default MiComponente
