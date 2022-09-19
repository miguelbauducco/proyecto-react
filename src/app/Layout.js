import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import logo from '../multimedia/logo.png'

const Layout = () => {
return (
    <div>
        <div className='logo'>
        <img src={logo} alt="logo" style={{width:300, height:250}}/>
        </div>
        <Navbar/>
        <Outlet/>
    </div>
)
}

export default Layout;