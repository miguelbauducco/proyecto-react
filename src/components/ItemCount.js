import React from 'react'
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const ItemCount = ({ stock, cuentaInicial = 0, onAdd}) =>{
    const [contador, setContador] = useState(cuentaInicial);

    return(

    <div className='divcont'>

            <button onClick={() =>setContador(cuentaInicial)}>Limpiar</button>

            <button onClick={() =>{
                contador > cuentaInicial ? setContador(contador - 1): setContador(cuentaInicial) }}>-</button>

                <h3 className='d-flex justify-content-center'>Contador : {contador}</h3>

            <button onClick={() =>{
                contador < stock ?  setContador(contador + 1) : setContador(stock)}}>+</button>

            <button onClick={() => onAdd(contador)}>Agregar al carrito</button>
    
    </div>

    );
}

export default ItemCount;