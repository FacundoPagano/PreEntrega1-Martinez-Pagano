import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import CartWidget from './components/CartWidget';

function App() {
  return (
    <div className="App">
      <Navbar>
        <CartWidget/>
      </Navbar>
      <ItemListContainer greatings={"Bienvenidos a la tienda Nickers"}/>
    </div>
  );
}

export default App;
