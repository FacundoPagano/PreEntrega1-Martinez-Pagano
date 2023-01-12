import React, {useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import ItemCount from './ItemCount'
import { products } from './Mock/Products'
import {CartContext} from './context/cartContext'
import { doc, getDoc, getFirestore } from 'firebase/firestore'


const ItemDetail = () => {
  
    const [item, setItem] = useState({})
    const { id } = useParams ()

    const { addToCart, cartItem }= useContext(CartContext)
 
    useEffect(() => {
      getItemData()
    }, [])

    const getItemData = async () => {
    const db = getFirestore()
    const docRef = doc (db, 'items' , id)
    const snapshot = await getDoc(docRef)
    setItem(snapshot.doc.map(i=>({id: i.id, ...i.data() })))
    }
  

    /*     useEffect(() => {
      getItemDetail().then(res=>{
        setItem(res);
      })
    }, [ id ])
    

    const getItemDetail = () => {
      return new Promise ((resolve,reject) => {
        const item = products.find( p => p.id == id)
        setTimeout(() => {
            resolve(item)
        }, 200);
      })
    }
 */
    const addHandler = () => {
      addToCart(id)
    }
    return (
    <div>
        <div className="card card-side bg-base-100 shadow-xl">
          <figure><img src= {item.image} alt={item.imageAlt}/></figure>
          <div className="card-body">
            <h2 className="card-title text-6xl">{item.name}</h2>
            <p className='text-xl'> Identifiacion del producto: {id}</p>
            <p className='text-3xl'>{item.description}</p>
            <p className='text-3xl'>$ {item.price} - stock: {item.stock}</p>
            <div className="card-actions justify-end">
              <ItemCount stock={item.stock} onAdd={addHandler}/>
            </div>
          </div>
        </div>
    </div>
  )
}

export default ItemDetail