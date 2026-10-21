import { useState } from 'react'

import Sidebar from './components/Sidebar'
import Dashboard from './pages/Dashboard'
import Agenda from './pages/Agenda'
import Clientes from './pages/Clientes'
import Servicos from './pages/Servicos'


import './App.css'
function App() {

  const [paginaAtual, setPaginaAtual] = useState("dashboard")
  
  let pagina

  if (paginaAtual === "dashboard") {
  pagina = <Dashboard />
  }
  if (paginaAtual === "agenda") {
  pagina = <Agenda />
  }

  if (paginaAtual === "clientes") {
  pagina = <Clientes />
  }

  if (paginaAtual === "servicos") {
  pagina = <Servicos />
  }

  return (
   <div className="app">
  <Sidebar
  setPaginaAtual={setPaginaAtual}
  paginaAtual={paginaAtual}
/>
  {pagina}
   

 
   </div>
  )
}

export default App
