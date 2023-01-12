import React, {useEffect, useState, useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import ItemCount from './ItemCount'
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
    setItem({id: snapshot.id, ...snapshot.data() })
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

    const [quantity, setquantity] = useState(0)
    const addHandler = (cantidad) => {
      addToCart(item,cantidad)
      setquantity(cantidad)
    }
    return (
    <div>
        <div className="card card-side bg-base-100 shadow-xl">
          <figure><img src= {item.image} alt={item.imageAlt}/></figure>
          <div className="card-body">
            <h2 className="card-title text-6xl">{item.name}</h2>
            <p className='text-xl'> Identifiacion del producto: {item.numero}</p>
            <p className='text-3xl'>{item.description}</p>
            <p className='text-3xl'>$ {item.price} - stock: {item.stock}</p>
            <div className="card-actions justify-end">
            {quantity === 0 ? 
                    <ItemCount stock={item.stock} onAdd={addHandler} /> 
                    : 
                    <div>
                    <Link to={"/cart"}><button className='btn btn-primary m-5'>Ir al carrito</button></Link>
                    <Link to={"/"}><button className='btn btn-primary m-5'>Seguir comprando</button></Link>
                    </div>}
            </div>
          </div>
        </div>
    </div>
  )
}

export default ItemDetail