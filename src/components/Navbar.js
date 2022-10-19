import React from 'react'
import '../styles/navbar.css'
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget'



const Navbartest = () => {


return (
    <div className='navbar'>
        <Link className="navtext" style = {{textDecoration: "none", color: 'black', fontSize: "22px"}} to='/category'>Productos</Link>
        <Link style = {{textDecoration: "none", color: 'black', fontSize: "22px"}} to='/category/bikini'>Bikinis</Link>
        <Link style = {{textDecoration: "none", color: 'black', fontSize: "22px"}} to='/category/enterizas'>Enterizas</Link>  
        <Link style = {{textDecoration: "none", color: 'black', fontSize: "22px"}} to='/contact'>Contacto</Link>
        <Link style = {{textDecoration: "none", color: 'black'}} to="/cart">
        <CartWidget/>
        </Link>
    </div>
);
}



export default Navbartest;