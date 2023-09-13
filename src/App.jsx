import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer greeting="Bienvenido a Dizfrute" />} />
        {/* <Route path="/productos/malteadas" element={<ItemList category="Malteadas" />} /> */}
      </Routes>

    </BrowserRouter>
  )
}

export default App;
