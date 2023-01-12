import { createContext, useState } from "react";

const CartContext = createContext ({
    cartItem: [],
    addToCart: () => {},
    clearCart: () => {},
    removeItem: () => {},
    totalItems: () => {},
    getTotalPrice: () => {},
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

    const removeItem = (id) => {
        const updateItems = products.filter((item => item.id !== id))
        setProducts(updateItems)
    }

    const clearCart = () => {
        setProducts ([])
    }
    
    function totalItems() {
        let total = 0;
        products.forEach(itemCart => {
            total = total + itemCart.cantidad
        })
        return total;
    }
    
    const getTotalPrice = () => {
        let total = 0;
        products.forEach(itemCart => {
            total = total + itemCart.cantidad * itemCart.price
        })
        return total;
    }

    const context={
        cartItem: products,
        addToCart: addToCart,
        clearCart: clearCart,
        removeItem: removeItem,
        totalItems: totalItems,
        getTotalPrice: getTotalPrice
    } 

  return (
    <CartContext.Provider value={context}>
        {children}
    </CartContext.Provider>
  )
}

export { CartContext, CartContextProvider}