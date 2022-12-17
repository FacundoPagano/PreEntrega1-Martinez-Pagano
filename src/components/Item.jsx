import React from 'react'


const Item = ({name,image,price,stock}) => {
  return (
    <div className="card card-compact w-96 bg-orange-300 shadow-xl my-14">
  <figure><img src={image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title text-black text-xl">{name}</h2>
    <strong className='text-black text-base' >Stock: {stock} - ${price}</strong>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Ver detalles</button>
    </div>
  </div>
</div>
  )
}

export default Item