import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import '../styles/item.css'



const Item = ({item}) => {


    return (
        <Link to={`/detail/${item.id}`}>
            <div className='container'>
                    <img className='element' src={item.img} alt='fotoproducto' style={{width:500, height: 300}}/>
                    <li className='title'>{item.title}</li>
                    <li className='element'>${item.price}</li>
            </div>
        </Link>
    );
}

export default Item;