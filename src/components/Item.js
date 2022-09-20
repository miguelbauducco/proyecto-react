import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCount from './ItemCount';
import ItemDetailContainer from './ItemDetailContainer';
import { Link } from 'react-router-dom';


const Item = ({item}) => {

    return (
        <Link to={`/detail/${item.id}`}>
            <div className='d-flex row justify-content-center'>
                <img  className='d-flex justify-content-center' src={item.img} alt='fotoproducto' style={{width:500, height: 300}}/>
                <li className='d-flex justify-content-center'>{item.title}</li>
                <li className='d-flex justify-content-center'>{item.price}</li>
            </div>
        </Link>
    );
}

export default Item;