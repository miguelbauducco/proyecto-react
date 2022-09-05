import React from 'react'
import { useState } from 'react'
import ItemList from './ItemList'

const Item = () => {
    let [item, setItem] = useState( [

        {
        id:1,
        title: 'Mouse HYPERX',
        price:'$100',
        pictureUrl:''
        },

        {
        id:2,
        title: 'Keyboard HYPERX',
        price:'$200',
        pictureUrl:''
        }

]);




return ( 
    <div>
    {item.map((itemList )=> {

        return (
            <ItemList
            key={itemList.id} 
            img={itemList.pictureUrl} 
            title={itemList.title} 
            price={itemList.price}/>
        )

    })}
    </div>
);
}

export default Item;