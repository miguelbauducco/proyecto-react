import React from 'react';
import ItemCart from '../components/ItemCart';
import {useCartContext} from '../CartContext';
import { Link } from 'react-router-dom';


const Cart = () => {

    const {cart, totalPrice} = useCartContext();

    if(cart.length === 0){
        return (
            <>
            <h2>El carrito se encuentra vacio</h2>
            <Link to='/'><button>Volver</button></Link>
            </>
        );
    }

return (
    <>
        {
            cart.map(product => <ItemCart key={product.id} product={product}/>)
        }
        <p>Precio total: ${totalPrice()}</p>
    </>
)
}

export default Cart;