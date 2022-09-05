import React from 'react'
import './navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartLogo from './CartLogo.js'


const Navbartest = () => {
return (

        <>
    <Navbar className='navbackground'>
        <Container>
        <Navbar.Brand href="#home"><div className='nav-name'>GG STORE</div></Navbar.Brand>
        </Container>
        <Nav className="me-auto">
            <Nav.Link href="#home"><div className='nav-text'>Catalogo</div></Nav.Link>
            <Nav.Link href="#features"><div className='nav-text'>Contacto</div></Nav.Link>
            <Nav.Link href="#pricing"><div className='nav-text'>Conocenos</div></Nav.Link>
            <Nav.Link  href="#cart"><div className='cart'><CartLogo/></div>
            </Nav.Link>
        </Nav>
        
    </Navbar>
    </>

)
}

export default Navbartest;