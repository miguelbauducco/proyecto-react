import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Contact from '../pages/Contact';
import ItemListContainer from '../components/ItemListContainer'
import React from 'react'
import Home from '../pages/Home'
import Layout from "./Layout";
import ItemDetailContainer from '../components/ItemDetailContainer';
import Cart from '../pages/Cart';
import BuyForm from '../pages/BuyForm';




const Router = () => (
    <BrowserRouter>
        <Routes>
            <Route element={<Layout/>}>
            <Route index path='/' element={<Home/>}/>
            <Route path='/category/:category' element={<ItemListContainer/>}/>
            <Route path='/category' element={<ItemListContainer/>}/>
            <Route path='/detail/:id' element={<ItemDetailContainer/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path='/buyform' element={<BuyForm/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
);

export default Router;