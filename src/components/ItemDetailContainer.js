import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {getFirestore, doc, getDoc} from 'firebase/firestore';
import ItemDetail from './ItemDetail'
import product from '../utilities/products.mock';


const ItemDetailContainer = () => {

    const [productDetail, setProductDetail] = useState([])

    const {id} = useParams()
    
    useEffect(() =>{
        const querydb = getFirestore();
        const queryDoc = doc (querydb, 'products', 'QdSddbPfZ2Q89LpmBjQR');
        getDoc(queryDoc)
        .then(res => setProductDetail({id: res.id, ...res.data() }))
    }, [])

    
    return(    
        <div>   
            <ItemDetail productDetailInfo={productDetail}/>
        </div>
    )  
}


export default ItemDetailContainer