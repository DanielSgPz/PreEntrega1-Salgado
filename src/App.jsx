import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Item from './components/Item';

const greeting = "Bienvenido a Dizfrute";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<ItemListContainer greeting={greeting} />} />
        <Route exact path="/productos/:id" element={<ItemListContainer greeting={greeting} />} />
        <Route exact path="/item/:id" element={<Item />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
