import './App.js';
import Navbar from './components/Navbar';
import './style.css';
import logo from './multimedia/logo.jpg';
import ItemListContainer from './components/ItemListContainer.js';
import Item from './components/Item'


function App() {
  return (
    <div> 
      <div className='logo'>
      <img src={logo} alt="logo"/>
      </div>
      <Navbar className="navbar"/>
      <ItemListContainer welcome={'Bienvenido a GG STORE'}/>
    </div>
  );
}

export default App;

