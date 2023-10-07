import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer';
import CheckOut from './components/CheckOut';
import Cart from './components/Cart';


const greeting = "Bienvenido a Dizfrute";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<ItemListContainer greeting={greeting} />} />
        <Route exact path="/productos/:id" element={<ItemListContainer greeting={greeting} />} />
        <Route exact path="/item/:id" element={<ItemDetailContainer />} />
        <Route exact path="/checkout" element={<CheckOut />} />
        <Route exact path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
