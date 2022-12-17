import React, { useEffect, useState } from 'react'

const Clicker = () => {
    
    // let count = 0;
    const [count, setCount] = useState(1)
    
    const clickHandlerMas = () => { 
      // count = count + 1;
        if (count<100) {
            setCount (count + 1);
            console.log("Se hizo click");
        }
      }
    const clickHandlerMenos = () => {
      if (count>=1) {
        setCount (count-1);
    }
}

// Estos useEffect no afectan al clicker, son solo demostracion, toda la funcionalidad del clicker esta arriba y como ejecutarlo en el return

//Cada vez que se haga render y en el montaje
useEffect( ()=> {
  console.log("se hizo render");
  //Esta funcion se ejecuta en el desmontaje
  return () => {}
})

//Solo en el montaje
useEffect( ( ) => {
  console.log("Este efecto sucede solo en el montaje");
}, [])

//Sucede en el montaje y cuando cambie count
useEffect( ( ) => {
  console.log("Este efecto sucede en el montaje y cuando cambia el count");
}, [count])


  return (
    <div className='p-20 flex flex-col'>
    <strong>Cantidad</strong>
    <button onClick={clickHandlerMenos} className='btn'>-</button>
    <strong>{count}</strong>
    <button onClick={clickHandlerMas} className='btn'>+</button>
    </div>
  )

}

export default Clicker