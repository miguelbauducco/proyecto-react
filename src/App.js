import './App.js';
import './style.css';
import logo from './multimedia/logo.png';
import ItemListContainer from './components/ItemListContainer.js';
import Router from "./app/Router";


function App() {
  return (
    <div> 
      <div className='logo'>
        <img src={logo} alt="logo" style={{width:300, height:250}}/>
      </div>
    <Router/>
    <ItemListContainer welcome={'Bienvenido a GG STORE'}/> 
    </div>
  );
}

export default App;

