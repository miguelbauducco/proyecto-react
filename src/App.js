import './App.js';
import React from 'react';
import './style.css';
import CartProvider  from './CartContext';
import Router from "./app/Router";

function App() {
  return (
    <div>
      <CartProvider>
        <Router/>
      </CartProvider>
    </div>
  );
}

export default App;


