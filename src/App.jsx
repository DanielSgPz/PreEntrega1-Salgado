import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'

function App() {

  return (
    <>
    <NavBar></NavBar>
    <ItemListContainer greeting="Bienvenido a Dizfrute"></ItemListContainer>
    </>
  )
}

export default App
