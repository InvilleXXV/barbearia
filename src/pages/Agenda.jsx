import "./Agenda.css"
function Agenda() {
  const agendamentos = [
    { id: 1, horario: "09:00", cliente: "João Silva", servico: "Corte de cabelo", status: "Confirmado" },
    { id: 2, horario: "10:00", cliente: "Pedro Santos", servico: "Barba", status: "Confirmado" },
    { id: 3, horario: "11:00", cliente: "Carlos Oliveira", servico: "Corte + Barba", status: "Pendente" },
    { id: 4, horario: "14:00", cliente: "Marcos Souza", servico: "Corte de cabelo", status: "Confirmado" },
  ]

  return (
    <div className="agenda-page">
      <div className="agenda-header">
        <div>
          <h1>Agenda</h1>
          <p>Visualize e gerencie os agendamentos.</p>
        </div>

        <button className="agenda-button">
          + Novo agendamento
        </button>
      </div>

      <div className="agenda-resumo">
        <div className="agenda-resumo-card">
          <span>Agendamentos do dia</span>
          <h2>{agendamentos.length}</h2>
        </div>

        <div className="agenda-resumo-card">
          <span>Confirmados</span>
          <h2>
            {agendamentos.filter((item) => item.status === "Confirmado").length}
          </h2>
        </div>

        <div className="agenda-resumo-card">
          <span>Pendentes</span>
          <h2>
            {agendamentos.filter((item) => item.status === "Pendente").length}
          </h2>
        </div>
      </div>

      <div className="agenda-lista">
        <h2>Agendamentos de hoje</h2>

        {agendamentos.map((item) => (
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
          </div>
        ))}
      </div>
    </div>
  )
}

export default Agenda
