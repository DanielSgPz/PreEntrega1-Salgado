import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer';
import CheckOut from './components/CheckOut';
import Cart from './components/Cart';
import { CartProvider } from './components/CartContext';


const greeting = "Bienvenido a Dizfrute";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>

      <NavBar />
      <Routes>
        <Route exact path="/" element={<ItemListContainer greeting={greeting} />} />
        <Route exact path="/productos/:id" element={<ItemListContainer greeting={greeting} />} />
        <Route exact path="/item/:id" element={<ItemDetailContainer />} />
        <Route exact path="/checkout" element={<CheckOut />} />
        <Route exact path="/cart" element={<Cart />} />
      </Routes>
      </CartProvider>

    </BrowserRouter>
  )
}

export default App;
