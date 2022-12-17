import React from 'react'
import ItemList from './ItemList'

const ItemListContainer = ({greatings}) => {

  return (
    <div className='text text-2xl'>{greatings}
    <ItemList/>
    </div>
  )
}

export default ItemListContainer