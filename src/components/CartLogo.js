import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import cartimg from '../multimedia/carritologo.png'




const CartLogo = () => {

    return (
        <div>
            <img src={cartimg} alt="logodelcarrito" style={{width:45, height: 45}} />
        </div>
    )
};

export default CartLogo;