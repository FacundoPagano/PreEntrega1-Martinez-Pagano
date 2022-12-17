
import './App.css';
import Navbar from './components/Navbar';
import CartWidget from './components/CartWidget';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="App">
      <Navbar>
        <CartWidget/>
      </Navbar>
        <h3>
      <ItemListContainer greatings={"Bienvenidos a nuestra tienda online"}>
      </ItemListContainer>
        </h3>
    </div>
  );
}

export default App;
