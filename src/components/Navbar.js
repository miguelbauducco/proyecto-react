import React from 'react'
import '../styles/navbar.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import CartWidget from './CartWidget'
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';


const Navbartest = () => {
return (

    <Navbar className='navbackground'> 
        <Nav className='container'>

            <Dropdown className='dropdownbox'>
                <Dropdown.Toggle className='droptitle' variant="warning" id="dropdown-basic">
                    Catalogo
                </Dropdown.Toggle>
                    <Dropdown.Menu className='dropdownmenu'>
                        <Dropdown.Item><Link to='/category/mouse' className='nav-text-dropdown'>Mouse</Link></Dropdown.Item>
                        <Dropdown.Item><Link to='/category/joystick' className='nav-text-dropdown'>Joystick</Link></Dropdown.Item>
                        <Dropdown.Item ><Link className='nav-text-dropdown'>noexistetdv</Link></Dropdown.Item>
                    </Dropdown.Menu>
            </Dropdown>

                    <Link to='/contact' className='nav-text'>
                        Contacto
                    </Link>
                    <Link className=' nav-text'>
                        Conocenos
                    </Link>
                    <Link to='/cart'>
                        <CartWidget/>
                    </Link> 
                </Nav> 
            </Navbar>

)
}

export default Navbartest;