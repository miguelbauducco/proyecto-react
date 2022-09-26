import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCount from './ItemCount';
import  { useCartContext } from '../CartContext'
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/itemdetail.css'


export const ItemDetail = ({productDetailInfo}) => {
    const [goToCart, setGoToCart] = useState(false);
    const  { addProduct } = useCartContext();

    const onAdd = (quantity) => {
        setGoToCart(true);
        addProduct(productDetailInfo, quantity);
    }


return(
    <div className='container'>
        <h3 className='productdetail'>{productDetailInfo.title}</h3>
            <div className='productdetail'>
                <img src={productDetailInfo.img} alt="fotoproducto" style={{width:400, height:300}}/>
            </div>  
        <div className='productdetail'>{productDetailInfo.detail}</div>
        <div className='productdetail'>{productDetailInfo.price}</div>
        <div>
            {
                goToCart
                ? <Link to='/cart' className='finishbutton'><button className='finishbutton'>Terminar compra</button></Link>
                :<ItemCount stock='10' onAdd={onAdd}/>
            }  
        </div>
    </div>
);
}

export default ItemDetail;
