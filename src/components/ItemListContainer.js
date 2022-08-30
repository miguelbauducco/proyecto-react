import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './item.css';

const ItemListContainer = ({welcome}) => {

    return(

    <div className='d-flex justify-content-center'>
        {welcome}
    </div>


)
};

export default ItemListContainer