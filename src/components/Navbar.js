import React from 'react'
import './navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartLogo from './CartLogo.js'
import { Link } from 'react-router-dom';


const Navbartest = () => {
return (

        <>
    <Navbar className='navbackground'>
        <Container>
        <Link to='/'>
        <Navbar.Brand><div className='nav-name'>GG STORE</div></Navbar.Brand>
        </Link>
        </Container>
        <Nav className="me-auto">
            <Link to='/category/joystick'><div>Joystick</div></Link>
            <Link to='/category/mouse'><div>Mouse</div></Link>
            <Link><div className='nav-text'>Catalogo</div></Link>
            <Link><div className='nav-text'>Contacto</div></Link>
            <Link><div className='nav-text'>Conocenos</div></Link>
            <Link  href="#cart"><div className='cart'><CartLogo/></div>
            </Link>
        </Nav>
    </Navbar>
    </>

)
}

export default Navbartest;