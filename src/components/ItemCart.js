import React from 'react';
import { useCartContext } from '../CartContext';
import '../styles/cart.css'

const ItemCart = ( {product} ) => {

const {removeProduct} = useCartContext();

return (
    <div className='d-flex justify-content-center row'>  
        <img className='img' src={product.img} alt='imgproduct'/>
        <h5 className='product-title'>{product.title}</h5>
        <div className='d-flex justify-content-around col'>
        <p className='quantity'>Cantidad: {product.quantity}</p>
        <p className='price'>Precio: ${product.price}</p>
        <p className='sub'>Subtotal: ${product.quantity * product.price}</p>
        <button className='btn-product' onClick = {() => removeProduct(product.id)}>Eliminar</button>
        </div>
    </div>
)
}

export default ItemCart;