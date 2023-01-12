import React from 'react'
import Item from './Item'

const ItemList = ({Items}) => {
    return (
        <>
            <div className='flex flex-wrap justify-center'>
                {Items.map(i => <Item key={i.id} {...i} />)}
            </div>
        </>
    )
}
export default ItemList