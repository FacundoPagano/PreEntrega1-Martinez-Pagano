import React from 'react'

const ItemDetail = ({name,image,price,stock,description,category}) => {
    return (
      <div>
          <h1>{name}</h1>
          <img src={image} alt="" />
          <strong>{category}</strong>
          <p>{description}</p>
          <strong>Stock: {stock} - $ {price} </strong>
      </div>
    )
  }

export default ItemDetail