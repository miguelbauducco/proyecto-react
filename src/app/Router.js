import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Contact from '../pages/Contact';
import Home from '../pages/Home'
import Layout from "./Layout";

const Router = () => (
    <BrowserRouter>
        <Routes>
                <Route element={<Layout/>}>
                <Route index path='/home' element={<Home/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="*" element={<div>404</div>}/>
                </Route>
        </Routes>
    </BrowserRouter>
);

export default Router;