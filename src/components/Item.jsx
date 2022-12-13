import React from 'react'
import {products} from '../components/Mock/Products'
import { Link } from 'react-router-dom'
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const Item = () => {

  const [prod, setProd] = useState({})
  const { id } = useParams()

  useEffect(() => {
    getprodDetail().then( res => {
        setProd( res )
    })
  }, [ id ])
  
  const getprodDetail = () => {
    return new Promise( (resolve, reject) => {
      const item = products.find( p => p.id == id )
      setTimeout(() => {
          resolve( item )
      }, 500);
    })
  }


  return (
    <div>
    <div>{prod.title}</div>
    <div>{prod.stock}</div>
    <div>{prod.price}</div>
     <img src={prod.image} alt="" />
    </div>
  )
}

export default Item