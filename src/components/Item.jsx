import React from 'react'
import { Link } from 'react-router-dom'


const Item = ({numero,name,image,price,stock,category}) => {
  return (
    <div className="card card-compact w-96 bg-orange-300 shadow-xl my-14 basis-1/4 mx-16 maxima-alt">
  <figure><img src={image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title text-black text-xl">{name}</h2>
    <h2>{category}</h2>
    <strong className='text-black text-base' >Stock: {stock} - ${price}</strong>
    <div className="card-actions justify-end">
      <Link to={`/ItemDetail/${numero}`} className="btn btn-primary">Ver detalle</Link>
    </div>
  </div>
</div>
  )
}

export default Item