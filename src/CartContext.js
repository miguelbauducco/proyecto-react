import React, {useState, useContext} from 'react'
const CartContext = React.createContext([]); 


export const useCartContext = () => useContext(CartContext);


const CartProvider = ( {children} ) => {


    const [cart, setCart] = useState([]);

    const addToCart = () => {

    }

    const cleanCart = () => setCart([]);

    const inCart = (id) => 
    cart.find(product => product.id === id) ? true : false;

    const removeOfCart = (id) => 
    setCart(cart.filter(product => product.id !== id));



    return (
        <CartContext.Provider value={{ cleanCart, inCart, removeOfCart, addToCart}}>
            {children}
        </CartContext.Provider>

)
}

export default CartProvider;
