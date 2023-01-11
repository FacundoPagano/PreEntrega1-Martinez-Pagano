import { createContext, useState } from "react";

const CartContext = createContext ({
    cartItem: [],
    addToCart: () => {},
    clearCart: () => {},
})

const CartContextProvider = ( { children } ) => {

    const [products, setProducts] = useState([])

    const addToCart = (producto,cantidad) => {
        const mismoProducto = products.find((p) => p.id === producto.id)
        if (mismoProducto) {
            const actCart = products.map((p) => {
                if (p.id === producto.id) {
                    return {...p, cantidad: p.cantidad + cantidad}
                }
                return p;
            })
            setProducts(actCart)
        }
        else {
            /* setProducts([...products, {...producto, cantidad}]) */
            setProducts (products => products.concat(producto) )
        }
    }

    const clearCart = () => {
        setProducts ([])
    }

    const context={
        cartItem: products,
        addToCart: addToCart,
        clearCart: clearCart,
    } 

  return (
    <CartContext.Provider value={context}>
        {children}
    </CartContext.Provider>
  )
}

export { CartContext, CartContextProvider}