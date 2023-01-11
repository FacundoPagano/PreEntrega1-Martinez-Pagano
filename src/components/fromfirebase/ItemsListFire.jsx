import React, { useEffect, useState } from 'react'
import {collection, doc, getDoc, getDocs, getFirestore} from 'firebase/firestore'
import { async } from '@firebase/util'

const ItemsListFire = () => {
  
  const [item, setItem] = useState()
  const [items, setItems] = useState([])
  
  useEffect(() => {
    getItemData()
    getItems()
  }, [])
  
  //Obteniendo un solo item - con .then
  const getItemData = () => {
    const db = getFirestore()
    const docRef = doc (db, 'items' , '3qrdzdtW7uskEl4qZPQD')
    getDoc(docRef).then ( snapshot=> {
      setItem({id: snapshot.id, ...snapshot.data()});
    })
  }

  //obtenemos toda la coleccion con async
  const getItems = async () => {
    const db = getFirestore()
    const collectionRef = collection(db, 'items')
    const snapshot = await getDocs(collectionRef)
    setItems(snapshot.docs.map(d => ({id:d.id, ...d.data()})));
  }
  
  return (
    <div className='text-xl m-10'>
      <h1>ItemsListFire</h1>
    { item &&
    <>
    <h2>Producto destacado</h2>
    <p>{item.name} - stock: {item.stock}</p>
    </>
    }

    {items.map (i=> <li key={i.id}>{i.name} {i.price}</li>)}
    </div>
  )
}

export default ItemsListFire