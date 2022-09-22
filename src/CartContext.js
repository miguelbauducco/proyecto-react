import React, {useState} from 'react'
export const CartContext = React.createContext([]); 




const CartProvider = ( {children} ) => {


    const [cart, setCart] = useState([]);


    const cleanCart = () => setCart([]);

    const inCart = (id) => 
    cart.find(product => product.id === id) ? true : false;


    return (
        <CartContext.Provider value='migue '>
            {children}
        </CartContext.Provider>

)
}

export default CartProvider;
