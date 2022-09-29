import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {getFirestore, doc, getDoc} from 'firebase/firestore';
import ItemDetail from './ItemDetail'



const ItemDetailContainer = () => {

    const [productDetail, setProductDetail] = useState([])

    const {id} = useParams()
    
    useEffect(() =>{
        const querydb = getFirestore();
        const queryDoc = doc (querydb, 'products', id);
        getDoc(queryDoc)
        .then(res => setProductDetail({id: res.id, ...res.data() }))
    }, [id])

    
    return(    
        <div>   
            <ItemDetail productDetailInfo={productDetail}/>
        </div>
    )  
}


export default ItemDetailContainer