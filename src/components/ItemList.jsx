import React, { useEffect, useState } from 'react'
import { products } from './Mock/Products'
import Item from './Item'
import { useParams } from 'react-router-dom'

const ItemList = () => {
    
    const [Items, setItems] = useState([])
    const {idCategory} = useParams ()

    useEffect(() => {
        if (idCategory){
            getItem()
            .then(response => setItems(products.filter(p => p.category === idCategory)))
            .catch(error => console.log("Error"))
            } else {
                getItem()
                .then (response => setItems(products))
                .catch(error => console.log("Error"))
            }

            return() => setItems([])

    }, [idCategory])


    const getItem = () => {
       return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve([...products])
            }, 1000);
        })
    }

  return (
    <div>
        <h1 className='text-center pt-10 text-4xl font-extralight italic'>Catalogo de productos</h1>
        <div className='flex flex-wrap justify-center'>
        {Items.map( prod => <Item key={prod.id} {...prod}/>)}
        </div>
    </div>
  )
}

export default ItemList