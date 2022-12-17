
import './App.css';
import Navbar from './components/Navbar';
import CartWidget from './components/CartWidget';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemDetail from './components/ItemDetail';

function App() {
  return (
    <BrowserRouter>
      <Navbar>
        <CartWidget/>
      </Navbar>
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/itemDetail/:id' element={<ItemDetail/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
