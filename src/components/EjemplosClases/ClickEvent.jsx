import React from 'react';

const ClickEvent = () => {

const onKeyDownInput = (event) => {
    console.log("tecla:", event.key);
    const vocales =["a","e","i","o","u"]
    if (vocales.includes(event.key.toLowerCase())) {
        event.preventDefault()
    }
}



  return (
    <div className='m-10'>
        <h1 className='text-xl my-5'>Input que no permita vocales</h1>
        <input onKeyDown={onKeyDownInput} type="text" className=' border-2'/>
    </div>
  )
}

export default ClickEvent