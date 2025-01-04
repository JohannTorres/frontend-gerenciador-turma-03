import React from 'react'
import FornecedorList from './pages/Fornecedor/FornecedorList'
import ClienteList from './pages/Cliente/ClienteList'
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom'

const App = () => {
  
  return (
    <BrowserRouter>
    <nav>
      <Link to="/fornecedores">Fornecedores</Link>
      <Link to="/clientes">Clientes</Link>
    </nav>
    <Routes>
      <Route path="/fornecedores" element={<FornecedorList />} />
      <Route path="/clientes" element={<ClienteList />} />
    </Routes>
  </BrowserRouter>
    
    //<BrowserRouter>
      //<FornecedorList/>
      //<ClienteList/>
    //</BrowserRouter>
  )
}

export default App
