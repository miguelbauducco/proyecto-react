
import React, {useState, useContext} from 'react'
const CartContext = React.createContext([]);


export const useCartContext = () => useContext(CartContext);


const CartProvider = ( {children} ) => {


    const [cart, setCart] = useState([]);

    const addProduct = (item, quantity) => {
        if (inCart(item.id)) {
            setCart(cart.map(product => {
                return product.id === item.id ? {...product, quantity: product.quantity + quantity} : product
            }));
        } else {
            setCart([...cart,{...item, quantity}]);
        }
    }

    const cleanCart = () => setCart([]);

    const inCart = (id) => 
    cart.find(product => product.id === id) ? true : false;

    const removeOfCart = (id) => 
    setCart(cart.filter(product => product.id !== id));


    return (
        <CartContext.Provider value={{ cleanCart, addProduct, inCart, removeOfCart }}>
            {children}
        </CartContext.Provider>
)
}

export default CartProvider;
