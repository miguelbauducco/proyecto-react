import './App.js';
import Navbar from './components/Navbar';
import './style.css';
import logo from './multimedia/logo.png';
import ItemListContainer from './components/ItemListContainer.js';


function App() {
  return (
    <div> 
      <div className='logo'>
      <img src={logo} alt="logo" style={{width:300, height:250}} />
      </div>
      <Navbar className="navbar"/>
      <ItemListContainer welcome={'Bienvenido a GG STORE'}/>
    </div>
  );
}

export default App;

