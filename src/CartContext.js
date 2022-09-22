import React, {useState} from 'react'
export const CartContext = React.createContext([]); 




const CartProvider = ( {children} ) => {


    const [cart, setCart] = useState([]);






    return (
        <CartContext.Provider value='migue '>
            {children}
        </CartContext.Provider>

)
}

export default CartProvider;
