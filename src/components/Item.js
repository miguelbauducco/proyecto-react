import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCount from './ItemCount';
import ItemDetailContainer from './ItemDetailContainer';


const Item = ({item}) => {

return ( 
    <div className='d-flex row justify-content-center'>
        <img  className='d-flex justify-content-center' src={item.img} alt='fotoproducto' style={{width:500, height: 300}}/>
        <li className='d-flex justify-content-center'>{item.title}</li>
        <li className='d-flex justify-content-center'>{item.price}</li>
        <div>
        <ItemCount stock='10' onAdd={ (contador) => sessionStorage.setItem('Cantidad', contador)}/>
        </div>

        <ItemDetailContainer key={item.id} productDetail={item}/>
    </div>
);
}

export default Item;