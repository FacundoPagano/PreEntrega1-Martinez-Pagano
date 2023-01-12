
import './App.css';
import Navbar from './components/Navbar';
import CartWidget from './components/CartWidget';
import ItemListContainer from './components/ItemListContainer';
import ItemDetail from './components/ItemDetail';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ClickEvent from './components/EjemplosClases/ClickEvent';
import Cart from './components/Cart';
import Form from './components/Form';
import ItemsListFire from './components/fromfirebase/ItemsListFire';

function App() {
  return (
    <BrowserRouter>
      <Navbar>
        <CartWidget/>
      </Navbar>
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/category/:idCategory' element={<ItemListContainer/>}/>
        <Route path='/itemDetail/:id' element={<ItemDetail/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/event' element={<ClickEvent/>}/>
        <Route path='/firebase' element={<ItemsListFire/>}/>
        <Route path='/form' element={<Form/>}/>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
