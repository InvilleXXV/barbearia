
import "./Agenda.css"
import { useState } from "react"

function Agenda({ agendamentos, setAgendamentos }) {
  const [formAberto, setFormAberto] = useState(false)
  const [cliente, setCliente] = useState("")
  const [horario, setHorario] = useState("")
  const [servico, setServico] = useState("Corte de cabelo")
  const [status, setStatus] = useState("Pendente")
  const [mensagem, setMensagem] = useState("")

  function adicionarAgendamento(e) {
    e.preventDefault()

    const clienteLimpo = cliente.trim()

    if (!clienteLimpo || !horario || !servico) {
      setMensagem("Preencha todos os campos.")
      return
    }

    const horarioOcupado = agendamentos.some(
      item => item.horario === horario
    )

    if (horarioOcupado) {
      setMensagem("Esse horário já está ocupado. Escolha outro.")
      return
    }

    const novoAgendamento = {
      id: Date.now(),
      horario,
      cliente: clienteLimpo,
      servico,
      status,
    }

    setAgendamentos(listaAtual =>
      [...listaAtual, novoAgendamento].sort(
        (a, b) => a.horario.localeCompare(b.horario)
      )
    )

    setCliente("")
    setHorario("")
    setServico("Corte de cabelo")
    setStatus("Pendente")
    setMensagem("Agendamento cadastrado com sucesso!")
    setFormAberto(false)
  }

  function excluirAgendamento(id) {
    setAgendamentos(listaAtual =>
      listaAtual.filter(item => item.id !== id)
    )

    setMensagem("Agendamento excluído com sucesso!")
  }

  return (
    <div className="agenda-page">
      <div className="agenda-header">
        <div>
          <h1>Agenda</h1>
          <p>Visualize e gerencie os agendamentos.</p>
        </div>

        <button
          className="agenda-button"
          type="button"
          onClick={() => {
            setFormAberto(!formAberto)
            setMensagem("")
          }}
        >
          {formAberto ? "Cancelar" : "+ Novo agendamento"}
        </button>
      </div>

      {mensagem && (
        <p className="agenda-mensagem" role="status">
          {mensagem}
        </p>
      )}

      {formAberto && (
        <form className="agenda-form" onSubmit={adicionarAgendamento}>
          <h2>Novo agendamento</h2>

          <label>
            Nome do cliente
            <input
              type="text"
              placeholder="Ex.: João Silva"
              value={cliente}
              onChange={e => setCliente(e.target.value)}
              required
            />
          </label>

          <label>
            Horário
            <input
              type="time"
              value={horario}
              onChange={e => setHorario(e.target.value)}
              required
            />
          </label>

          <label>
            Serviço
            <select
              value={servico}
              onChange={e => setServico(e.target.value)}
              required
            >
              <option value="Corte de cabelo">Corte de cabelo</option>
              <option value="Barba">Barba</option>
              <option value="Corte + Barba">Corte + Barba</option>
            </select>
          </label>

          <label>
            Status
            <select
              value={status}
              onChange={e => setStatus(e.target.value)}
            >
              <option value="Pendente">Pendente</option>
              <option value="Confirmado">Confirmado</option>
            </select>
          </label>

          <button className="agenda-button" type="submit">
            Salvar agendamento
          </button>
        </form>
      )}

      <div className="agenda-resumo">
        <div className="agenda-resumo-card">
          <span>Agendamentos do dia</span>
          <h2>{agendamentos.length}</h2>
        </div>

        <div className="agenda-resumo-card">
          <span>Confirmados</span>
          <h2>
            {agendamentos.filter(item => item.status === "Confirmado").length}
          </h2>
        </div>

        <div className="agenda-resumo-card">
          <span>Pendentes</span>
          <h2>
            {agendamentos.filter(item => item.status === "Pendente").length}
          </h2>
        </div>
      </div>

      <div className="agenda-lista">
        <h2>Agendamentos de hoje</h2>

        {agendamentos.map(item => (
          <div className="agendamento-card" key={item.id}>
            <div className="agendamento-horario">
              {item.horario}
            </div>

            <div className="agendamento-info">
              <h3>{item.cliente}</h3>
              <p>{item.servico}</p>
            </div>

            <span
              className={`agendamento-status ${
                item.status === "Confirmado" ? "confirmado" : "pendente"
              }`}
            >
              {item.status}
            </span>

            <button
              className="agenda-button"
              type="button"
              onClick={() => excluirAgendamento(item.id)}
            >
              Excluir
            </button>
          </div>
        ))}

        {agendamentos.length === 0 && (
          <p>Nenhum agendamento cadastrado.</p>
        )}
      </div>
    </div>
  )
}

export default Agenda
