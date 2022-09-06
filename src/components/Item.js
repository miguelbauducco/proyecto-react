import React from 'react'
import { useState } from 'react'
import ItemList from './ItemList'
import joystickw from '../multimedia/joystickw.jpg'
import joystickb from '../multimedia/joystickb.jpg'

const Item = () => {
    let [item, setItem] = useState( [

        {
        id:1,
        title: 'PS4 Joystick WHITE',
        price:'$200',
        img:joystickw,
        },

        {
        id:2,
        title: 'PS4 Joystick BLACK',
        price:'$200',
        img:joystickb
        }

]);




return ( 
    <div>
    {item.map((itemList )=> {

        return (
            <ItemList
            key={itemList.id} 
            img={itemList.img} 
            title={itemList.title} 
            price={itemList.price}/>
        )

    })}
    </div>
);
}

export default Item;