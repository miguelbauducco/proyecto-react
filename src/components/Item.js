import React from 'react'
import ItemList from './ItemList'


const Item = ({item}) => {

return ( 
        <div className='d-flex row justify-content-center'>
        <img  className='d-flex justify-content-center' src={item.img} alt='fotoproducto' style={{width:500, height: 300}}/>
        <li className='d-flex justify-content-center'>{item.title}</li>
        <li className='d-flex justify-content-center'>{item.price}</li>
    </div>
);
}

export default Item;