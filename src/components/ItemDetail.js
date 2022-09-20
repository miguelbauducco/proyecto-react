import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCount from './ItemCount';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export const ItemDetail = ({productDetailInfo}) => {
    const [goToCart, setGoToCart] = useState(false);

    const onAdd = () => {
        setGoToCart(true);
    }


return(
    <div className='container'>
        <h3 className='d-flex justify-content-center'>            Detalles de producto        </h3>
            <div className='d-flex justify-content-center'>
                <img src={productDetailInfo.img} alt="fotoproducto" style={{width:200, height:150}}/>
            </div>
        <div className='d-flex justify-content-center'>{productDetailInfo.title}</div>
        <div className='d-flex justify-content-center'>{productDetailInfo.price}</div>
        <div className='d-flex justify-content-center'>{productDetailInfo.detail}</div>
        <div>
            {
                goToCart
                ? <Link to='/cart'><button>Terminar compra</button></Link>
                :<ItemCount stock='10' onAdd={onAdd}/>
            }  
        </div>
    </div>
);
}

export default ItemDetail;
