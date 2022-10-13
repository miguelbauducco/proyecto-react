import React from 'react';
import ItemCart from '../components/ItemCart';
import {useCartContext} from '../CartContext';
import { Link } from 'react-router-dom';
import '../styles/cart.css'
import 'bootstrap/dist/css/bootstrap.min.css';



const Cart = () => {

    const {cart, totalPrice} = useCartContext();


    if(cart.length === 0){
        return (
            <div>
            <h2 className='empty'>¡El carrito se encuentra vacio!</h2>
            <Link to='/'><button>Volver</button></Link>
            </div>
        );
    }

return (
    <>
    <div>
        {
            cart.map(product => <ItemCart key={product.id} product={product}/>)
        }
        <p className='total'>Precio total: ${totalPrice()}</p>
        </div>
        <div>
            <Link to='/buyform'>
            <button>
                Comprar
            </button>
            </Link>
        </div>
    </>
)
}

export default Cart;