import React from 'react'


const ItemList = (props) => {

return (
    <div className='d-flex row justify-content-center'>
        <img  className='d-flex justify-content-center' src={props.img} alt='fotoproducto' style={{width:500, height: 300}}/>
        <li className='d-flex justify-content-center'>{props.title}</li>
        <li className='d-flex justify-content-center'>{props.price}</li>
    </div>
);
}

export default ItemList;