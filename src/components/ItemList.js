import React, { useEffect, useState }  from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Item from './Item';
import joystickw from '../multimedia/joystickw.jpg'
import joystickb from '../multimedia/joystickb.jpg'



const ItemList = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
    
    new Promise((resolve, reject) => {
    
        setTimeout(() => {
            resolve([
        {
        id:1,
        title: 'PS4 Joystick WHITE',
        price:'$200',
        img:joystickw,
        detail: 'Joystick inalambrico de Playstation 4 con garantia incluida'
        },

        {
        id:2,
        title: 'PS4 Joystick BLACK',
        price:'$200',
        img:joystickb,
        detail: 'Joystick inalambrico de Playstation 4 con garantia incluida'
        }


    ]);  
    },2000);
}).then((data) => {
        setProducts(data);
        })
    },[]
    )


return (
<div>
    {console.log("products:", products)}
    {products.map((product) => {
        return(
    <Item key={products.id} img={products.img} item={product} />);
    })}
</div>
);
}
export default ItemList;