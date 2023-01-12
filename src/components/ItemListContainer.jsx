import React, { useEffect, useState } from 'react'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'
import { collection, getDocs, getFirestore, query, where,} from 'firebase/firestore'

const ItemListContainer = ({product}) => {

    const [items, setItems] = useState([])
    const {idCategory} = useParams();
    
    useEffect(()=>{
        idCategory?getCategory():getItems()
    },[idCategory])

    const getItems = async () => {
        const db = getFirestore()
        const collectionRef = collection(db, 'items')
        const snapshot = await getDocs(collectionRef)
        setItems(snapshot.docs.map(i => ({id: i.id, ...i.data()})))
    }

    const getCategory = async ()=>{
        const db = getFirestore()
        const collectionRef = query(collection(db,'items'),where('category','==',idCategory))
        const snapshot = await getDocs(collectionRef)
        setItems(snapshot.docs.map(i=>({id:i.id, ...i.data() })))
    }



  return (
    <>
        <h1 className='text-8xl italic mt-10 text-center'>Bienvenidos a GamersX</h1>
        <h2 className='text-5xl mt-20 text-center'>Catalogo de productos</h2>
        <div className='flex flex-row mt-10 justify-center'>
            <div className='flex'><ItemList Items={items} /></div>
        </div>

    </>
)
}

export default ItemListContainer