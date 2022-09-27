import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import cartimg from '../multimedia/carritologo.png'
import { useCartContext } from '../CartContext';




const CartWidget= () => {

    const {totalProducts} =  useCartContext();
    
    return (
        <div>
            <img src={cartimg} alt="logodelcarrito" style={{width:45, height: 45}} />
            <p className=''>{totalProducts() || ''}</p>
        </div>
    )
};

export default CartWidget;