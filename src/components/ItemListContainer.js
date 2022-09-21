import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/itemlist.css';
import ItemList from './ItemList';

const ItemListContainer = ({ welcome }) => {
    
    return(
        <div>
            <h1 className='d-flex justify-content-center'>
                {welcome}
            </h1>
            <div className='container d-flex justify-content-center'>
                <ItemList/> 
            </div>
        </div>
    )
};

export default ItemListContainer;