import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './itemlist.css';
import ItemCount from './ItemCount'
import Item from './Item';

const ItemListContainer = ({ welcome }) => {
    return(
    
    <div>
    <div className='d-flex justify-content-center'>
    {welcome}
    </div>
    <div className='container d-flex justify-content-center'>
    <div className='counter'>
    <Item/>
    <ItemCount stock='10' onAdd={ (contador) => sessionStorage.setItem('Cantidad', contador)}/>
    </div>
    </div>
</div>
)
};

export default ItemListContainer;