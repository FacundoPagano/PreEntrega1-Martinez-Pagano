import React, { useEffect, useState } from 'react'
import { products } from './Mock/Products'
import Item from './Item'

const ItemList = () => {
    
    const [Items, setItems] = useState([])

    useEffect( () => {
        getItem().then(response =>{
            console.log(response);
            setItems(response)
        })
    }, [])


    const getItem = () => {
       return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve([...products])
            }, 2000);
        })
    }

  return (
    <div>
        <h1>Catalogo de productos</h1>
        <div className='flex flex-col items-center'>
        {Items.map( prod => <Item key={prod.id} {...prod}/>)}
        </div>
    </div>
  )
}

export default ItemList