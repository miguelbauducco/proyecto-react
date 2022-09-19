import React, { useEffect, useState }  from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Item from './Item';
import product from '../utilities/products.mock'
import { useParams } from 'react-router-dom';


const ItemList = () => {

    const {category} = useParams()



    const [products, setProducts] = useState([]);

    useEffect(() => {
    
    new Promise((resolve, reject) => {
    
        setTimeout(() => {
            resolve(product);  
    },2000);
}).then((data) => {

    if(category){

        const list = data.filter (e => {
            return e.category == category
        })
        setProducts(list);
    }else{
        setProducts(data);
    }

    })
    },[category]
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