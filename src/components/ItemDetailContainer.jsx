import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import { products } from './Mock/Products'


const ItemDetailContainer = () => {
  
    const [items, setItems] = useState([])
  
    useEffect(() => {
      getProducts().then (response => {
        setItems(response)
      })
    }, [])
    
    const getProducts = () => { 
        return new Promise ( (resolve,reject) => {
            setTimeout( ()=> {
                resolve (products)
            }, 2000)
        })
    }
  
    return (
    <div>
        {items.map( prod => <ItemDetail key={prod.id} {...prod}/>)}
    </div>
  )
}

export default ItemDetailContainer