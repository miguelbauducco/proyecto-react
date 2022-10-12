import React from 'react';
import ItemCart from '../components/ItemCart';
import {useCartContext} from '../CartContext';
import { Link } from 'react-router-dom';
import { addDoc, collection, getFirestore } from 'firebase/firestore';


const Cart = () => {

    const {cart, totalPrice} = useCartContext();

    const buy = {

        items: cart.map( product => ({ id: product.id, title: product.title, price: product.price, quantity: product.quantity})) ,
        total: totalPrice(),

    }

    const buyClick = () => {

        const db = getFirestore();
        const buyCollection = collection(db, 'buys');
        addDoc(buyCollection, buy)
        .then (({id}) => console.log(id))
    }

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
    <div>
        {
            cart.map(product => <ItemCart key={product.id} product={product}/>)
        }
        <p>Precio total: ${totalPrice()}</p>
        </div>
        <div>
            <Link to='/buyform'>
            <button onClick={buyClick}>
                Comprar
            </button>
            </Link>
        </div>
    </>
)
}

export default Cart;