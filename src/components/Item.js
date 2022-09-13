import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetail from './ItemDetail';

const Item = ({item}) => {

return ( 
    <div className='d-flex row justify-content-center'>
        <img  className='d-flex justify-content-center' src={item.img} alt='fotoproducto' style={{width:500, height: 300}}/>
        <li className='d-flex justify-content-center'>{item.title}</li>
        <li className='d-flex justify-content-center'>{item.price}</li>
        <ItemDetail id={item.id} title={item.title} detail={item.detail} img={item.img} price={item.price}/>
    </div>
);
}

export default Item;