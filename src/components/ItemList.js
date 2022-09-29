import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Item from './Item';



const ItemList = ({product} = []) => {

    return(  
        <div>
            {product.map(product => 
                <Item key={product.id} item={product}/>
            )}
        </div>
    );
}

export default ItemList;