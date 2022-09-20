import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail'
import product from '../utilities/products.mock';


const ItemDetailContainer = () => {

    const [productDetail, setProductDetail] = useState([])

    const {id} = useParams()
    
    useEffect(() =>{
        const getDetails = new Promise ((resolve,reject) =>{
            resolve(product)
        })
        getDetails.then(res=>setProductDetail(res.find(product => product.id === parseInt(id))))
    },[])

    
        return(    
        <div>
            <ItemDetail productDetailInfo={productDetail}/>
        </div>
            

)  
}


export default ItemDetailContainer