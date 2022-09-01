import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './itemlist.css';
import ItemCount from './ItemCount'

const ItemListContainer = () => {
    return(

    <div className='container d-flex justify-content-center'>
    <div className='counter'>
    <ItemCount stock='10' onAdd={ (contador) => sessionStorage.setItem('Cantidad', contador)}/>
    </div>
    </div>


)
};

export default ItemListContainer