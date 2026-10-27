
import { useState, useEffect } from "react"

import Sidebar from "./components/Sidebar"
import Dashboard from "./pages/Dashboard"
import Agenda from "./pages/Agenda"
import Clientes from "./pages/Clientes"
import Servicos from "./pages/Servicos"

import "./App.css"

const clientesIniciais = [
  { id: 1, nome: "João Silva", telefone: "(19) 99999-1111" },
  { id: 2, nome: "Pedro Santos", telefone: "(19) 99999-2222" },
  { id: 3, nome: "Carlos Oliveira", telefone: "(19) 99999-3333" },
]

const servicosIniciais = [
  { id: 1, nome: "Corte de cabelo", preco: 35 },
  { id: 2, nome: "Barba", preco: 25 },
  { id: 3, nome: "Corte + Barba", preco: 50 },
]

const agendamentosIniciais = [
  {
    id: 1,
    horario: "09:00",
    cliente: "João Silva",
    servico: "Corte de cabelo",
    status: "Confirmado",
  },
  {
    id: 2,
    horario: "10:00",
    cliente: "Pedro Santos",
    servico: "Barba",
    status: "Confirmado",
  },
  {
    id: 3,
    horario: "11:00",
    cliente: "Carlos Oliveira",
    servico: "Corte + Barba",
    status: "Pendente",
  },
  {
    id: 4,
    horario: "14:00",
    cliente: "Marcos Souza",
    servico: "Corte de cabelo",
    status: "Confirmado",
  },
]

function carregarDados(chave, dadosIniciais) {
  try {
    const dadosSalvos = localStorage.getItem(chave)

    if (dadosSalvos !== null) {
      const dados = JSON.parse(dadosSalvos)

      if (Array.isArray(dados)) {
        return dados
      }
    }
  } catch {
    // Se os dados estiverem inválidos, usamos os valores iniciais.
  }

  return dadosIniciais
}

function App() {
  const [paginaAtual, setPaginaAtual] = useState("dashboard")

  const [clientes, setClientes] = useState(() =>
    carregarDados("clientes", clientesIniciais)
  )

  const [servicos, setServicos] = useState(() =>
    carregarDados("servicos", servicosIniciais)
  )

  const [agendamentos, setAgendamentos] = useState(() =>
    carregarDados("agendamentos", agendamentosIniciais)
  )

  useEffect(() => {
    localStorage.setItem("clientes", JSON.stringify(clientes))
  }, [clientes])

  useEffect(() => {
    localStorage.setItem("servicos", JSON.stringify(servicos))
  }, [servicos])

  useEffect(() => {
    localStorage.setItem("agendamentos", JSON.stringify(agendamentos))
  }, [agendamentos])

  let pagina

  if (paginaAtual === "dashboard") {
    pagina = (
      <Dashboard
        clientes={clientes}
        agendamentos={agendamentos}
        servicos={servicos}
      />
    )
  }

  if (paginaAtual === "agenda") {
    pagina = (
      <Agenda
        agendamentos={agendamentos}
        setAgendamentos={setAgendamentos}
      />
    )
  }

  if (paginaAtual === "clientes") {
    pagina = (
      <Clientes
        clientes={clientes}
        setClientes={setClientes}
      />
    )
  }

  if (paginaAtual === "servicos") {
    pagina = (
      <Servicos
        servicos={servicos}
        setServicos={setServicos}
      />
    )
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
