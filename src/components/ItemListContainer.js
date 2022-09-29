import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/itemlist.css';
import ItemList from './ItemList';
import {getFirestore, collection, getDocs, query, where} from 'firebase/firestore';
import { useParams } from 'react-router-dom';
import  { useEffect, useState }  from 'react'

const ItemListContainer = ({ welcome }) => {

const {category} = useParams()
const [products, setProducts] = useState([]);

    useEffect(() => {   

        const querydb = getFirestore();
        const queryCollection = collection(querydb, 'products');
            if(category){
                const queryFilter = query(queryCollection, where('category', '==', category))
                getDocs(queryFilter)
                    .then(res => setProducts(res.docs.map(product => ({id: product.id, ...product.data() }))))
            } else {
                getDocs(queryCollection)
                    .then(res => setProducts(res.docs.map(product => ({id: product.id, ...product.data() }))))
        }
    },[category])
    
    return(
        <div>
            <h1 className='d-flex justify-content-center'>
                {welcome}
            </h1>
            <div className='container d-flex justify-content-center'>
                <ItemList product={products}/> 
            </div>
        </div>
    )
};

export default ItemListContainer;