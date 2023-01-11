import { useContext } from 'react'
import {CartContext} from './context/cartContext'

const Cart = () => {
  
  const { cartItem, clearCart }= useContext(CartContext)

  //Con return 
  /* if (cartItem.length == 0){
    return <h1 className='text-5xl m-10 pt-20 text-center'> Su carrito se encuentra vacio.</h1>
  } */

    return (
    <>
      <div className='text-xl m-10'> Mi Carrito </div>
      {cartItem.length == 0 && <h1 className='text-5xl m-10 pt-20 text-center'> Su carrito se encuentra vacio.</h1>}
      <div>{cartItem.map ((i => <li key={i}> {i} </li>))}</div>
      {cartItem.length > 0 && <button className='btn btn-primary ml-10' onClick={clearCart}>  Vaciar Carrito</button>}
    </>
  )
}

export default Cart