import { addDoc, collection, getFirestore, serverTimestamp } from 'firebase/firestore'
import React, { useContext, useState } from 'react'
import { CartContext } from './context/cartContext'

const Form = () => {
    const { cartItem, getTotalPrice, clearCart } = useContext(CartContext)
    const [user, setUser] = useState({})
    const [orderId, setOrderId] = useState('')
    const datosComprador = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }
    const Completar = async (e) => {
        e.preventDefault()
        let order = {
            buyer: user,
            items: cartItem,
            total: getTotalPrice(),
            date: serverTimestamp()
        }

        const db = getFirestore();
        const orderCollection = collection(db, "orders")
        const res = await addDoc(orderCollection, order)
        setOrderId(res.id)
        clearCart()
    }
    console.log(cartItem)
    return (
        <>
            <div onSubmit={Completar}>
                {orderId ? <h2 className='text-center mt-20 text-6xl'>Gracias por elegirnos!! Su Id de compra es: {orderId}</h2>
                    : <form className='flex flex-col m-5'>
                        <h2 className='text-4xl mb-10'>Rellene el siguiente formulario para completar su compra!</h2>
                        <input className='m-3' onChange={datosComprador} type="text" name="name" placeholder="Nombre" />
                        <input className='m-3' onChange={datosComprador} type="tel" name="phone" placeholder="Telefono" />
                        <input className='m-3' onChange={datosComprador} type="email" name="email" placeholder="Correo electrónico" />
                        <button className='btn btn-primary' type="submit">Generar orden</button>
                        <h2 className='text-center text-3xl'>Su total es de: ${getTotalPrice()}</h2>
                    </form>}
                <div className='flex -flex-col m-10'>
                    {cartItem.map(cartOrder => {
                        return (
                            <div className='flex flex-col m-20'>
                                <img src={cartOrder.image} alt="" />
                                <h2 className='text-xl'>{cartOrder.name}</h2>
                                <h3 className='text-xl'>${cartOrder.price}</h3>
                                <h4 className='text-xl'>Cantidad: {cartOrder.cantidad}</h4>
                                <h4 className='text-xl'>Subtotal: ${cartOrder.cantidad * cartOrder.price} </h4>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Form