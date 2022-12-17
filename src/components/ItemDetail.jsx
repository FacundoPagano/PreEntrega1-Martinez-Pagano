import React, {useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { products } from './Mock/Products'


const ItemDetail = () => {
  
    const [item, setItem] = useState({})
    const { id } = useParams ()

    useEffect(() => {
      getItemDetail().then(res=>{
        setItem(res);
      })
    }, [ id ])
    

    const getItemDetail = () => {
      return new Promise ((resolve,reject) => {
        const item = products.find( p => p.id == id)
        setTimeout(() => {
            resolve(item)
        }, 500);
      })
    }


  
    return (
    <div>
        <div className="card card-side bg-base-100 shadow-xl">
          <figure><img src= {item.image} alt="Movie"/></figure>
          <div className="card-body">
            <h2 className="card-title">{item.name}</h2>
            <p> detalle del producto: {id}</p>
            <p>{item.desciption}</p>
            <p>$ {item.price} - stock: {item.stock}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Añadir al carrito</button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default ItemDetail