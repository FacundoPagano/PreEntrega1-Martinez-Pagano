import { useContext } from 'react'
import { Link } from 'react-router-dom'
import {CartContext} from './context/cartContext'

const Cart = () => {
  
  const { cartItem, clearCart, removeItem, getTotalPrice }= useContext(CartContext)

  //Con return 
  /* if (cartItem.length == 0){
    return <h1 className='text-5xl m-10 pt-20 text-center'> Su carrito se encuentra vacio.</h1>
  } */

  console.log(cartItem);
    return (
    <>
      <div className='text-xl m-10'> Mi Carrito </div>
      {cartItem.length == 0 && 
        <div>
          <h1 className='text-5xl m-10 pt-20 text-center'> Su carrito se encuentra vacio.</h1>
          <Link to={'/'}><button className='btn btn-primary'>Ir a comprar</button></Link>
        </div>}
      <div className='flex flex-wrap justify-center'>
        {cartItem.map(i=> (
          <div className="card card-compact w-96 bg-orange-300 shadow-xl my-14 basis-1/4 mx-16 " key={i.id}>
          <img className='max-alt' src={i.image} alt={""} />
          <strong className='text-3xl text-black'>{i.name}</strong>
          <h3 className='text-black text-xl'>${i.price}</h3>
          <h4 className='text-black text-xl'>Cantidad: {i.cantidad}</h4>
          <h4 className='text-black text-xl'>Subtotal: ${i.cantidad * i.price} </h4>
          <button className='btn btn-primary' onClick={() => removeItem(i.id)}>Eliminar</button>
        </div>
      ))}</div>
      {cartItem.length > 0 && 
        <div>
          <p className='mb-10 ml-10 text-3xl'> Total: ${getTotalPrice()}</p>
      <div className='mb-10'>
        <button className='btn btn-primary ml-10' onClick={clearCart}>  Vaciar Carrito</button>
        <Link to={'/'}><button className='btn btn-primary ml-10'>Seguir comprando</button></Link>
        <Link to={'/Form'}><button className='btn btn-primary ml-10'>Comprar</button></Link>
      </div>
        </div>}
    </>
  )
}

export default Cart