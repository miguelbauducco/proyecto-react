import React from 'react'

const ItemList = (props) => {

return (
    <div className='d-flex row'>
        <img alt='fotoproducto'>{props.pictureUrl}</img>
        <li>{props.title}</li>
        <li>{props.price}</li>
    </div>
);
}

export default ItemList;