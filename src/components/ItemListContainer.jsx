import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { products } from '../components/Mock/Products'
import ItemList from './ItemList'

const ItemListContainer = ({greatings}) => {
  
  const {idCategory} = useParams()

const [productList, setProductList] = useState([])

const getProducts = ()=> new Promise((resolve, reject)=>{
  setTimeout(()=>resolve(products),2000)
  
})

useEffect(()=>{

  if (idCategory){
    getProducts()
    .then(products => setProductList(products.filter(p => p.category ===idCategory)))
    .catch(error => console.log(error))
  } else {
    getProducts()
    .then(products => setProductList(products))
    .catch(error => console.log(error))
  } 
  return () => setProductList([])

  
  
},[idCategory])
  
  return (
    <div className='text'>{greatings}
    <ItemList productList={productList}/>  
    </div>
  )
}

export default ItemListContainer