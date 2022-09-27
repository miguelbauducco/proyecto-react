import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from "../components/ItemListContainer";




const Home = () => {
    return (
        <div>
            <ItemListContainer welcome={'Bienvenido a REGNUM'}/>
        </div>
    )
}

export default Home