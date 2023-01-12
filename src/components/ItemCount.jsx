import React, { useState } from 'react'


const ItemCount = ({stock, onAdd}) => {

    const [count, setCount] = useState(1)

    const sumar = () => {
        if(count < stock){
            setCount( count + 1)
        }
    }

    const restar = () => {
        if(count >= 1){
            setCount( count >= count - 1)
        }
    }

  return (
    <>
    <div className='btn btn-primary'>
        <button onClick={restar} className='px-5 text-black bg-orange-200 text-xl rounded-md'> - </button>
        <span className='text-xl px-5 m-2 '>{count}</span>
        <button onClick={sumar} className='px-5 text-black bg-orange-200 text-xl rounded-md'> + </button>
    </div>
    <p><button onClick={()=> onAdd(count)} className='btn btn-primary'>Añadir al carrito</button></p>
    </>
  )
}

export default ItemCount