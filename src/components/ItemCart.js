
import React from 'react';
import { useCartContext } from '../CartContext';
const ItemCart = ( {product} ) => {

const {removeProduct} = useCartContext();

return (
    <div className='d-flex justify-content-around'>  
        <img src={product.img} alt='imgproduct' style={{width:300, height: 300}}/>
        <h5>{product.title}</h5>
        <p>Cantidad: {product.quantity}</p>
        <p>Precio: ${product.price}</p>
        <p>Subtotal: ${product.quantity * product.price}</p>
        <button onClick = {() => removeProduct(product.id)}>Eliminar</button>
    </div>
)
}

export default ItemCart;