import React from 'react'
import ItemDetailContainer from './ItemDetailContainer'
import ItemList from './ItemList'

const ItemListContainer = ({greatings}) => {

  return (
    <div className='text'>{greatings}
    <ItemList/>
    </div>
  )
}

export default ItemListContainer