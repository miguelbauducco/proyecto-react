import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import logo from '../multimedia/logo.png'
import '../styles/layout.css'

const Layout = () => {
    return (
        <div>
            <Link to='/'>
            <div className='logo'>
            <img src={logo} alt="logo" style={{width:300, height:250}}/>
            </div>
            </Link>
            <Navbar/>
            <Outlet/>
        </div>
    )
}

export default Layout;