import React, { useEffect, useState }  from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Item from './Item';
import product from '../utilities/products.mock'


const ItemList = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
    
    new Promise((resolve, reject) => {
    
        setTimeout(() => {
            resolve(product);  
    },2000);
}).then((data) => {
        setProducts(data);
        })
    },[]
    )


return(  
<div>
    {products.map(product => 
    <Item key={product.id} item={product}/>
    )
}
</div>
);
}

export default ItemList;