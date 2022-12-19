import React, { useState } from 'react'


const ItemCount = ({stock}) => {

    const [count, setCount] = useState(1)

    const onAdd = () => {
        if(count < stock){
            setCount( count + 1)
        }
    }

    const onSub = () => {
        if(count > 1){
            setCount( count => count - 1)
        }
    }

  return (
    <div className='btn btn-primary'>
        <button onClick={onSub} className='px-10 text-black bg-orange-200 text-xl rounded-md'> - </button>
        <span className='text-xl px-10 m-2 '>{count}</span>
        <button onClick={onAdd} className='px-10 text-black bg-orange-200 text-xl rounded-md'> + </button>
    </div>
  )
}

export default ItemCount