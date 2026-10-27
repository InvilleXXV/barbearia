
import "./Dashboard.css"
import DashboardHeader from "../components/DashboardHeader"
import DashboardCard from "../components/DashboardCard"
import Appointment from "../components/Appointment"

function Dashboard({ clientes, agendamentos, servicos }) {
  const faturamento = agendamentos
    .filter(item => item.status === "Confirmado")
    .reduce((total, item) => {
      const servicoEncontrado = servicos.find(
        servico => servico.nome === item.servico
      )

      return total + (servicoEncontrado?.preco || 0)
    }, 0)

  function formatarPreco(valor) {
    return valor.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    })
  }

  const proximosAgendamentos = [...agendamentos]
    .sort((a, b) => a.horario.localeCompare(b.horario))
    .slice(0, 4)

  return (
    <main className="dashboard">
      <DashboardHeader />

      <section className="dashboard-resumo">
        <DashboardCard
          titulo="Clientes"
          valor={clientes.length}
        />

        <DashboardCard
          titulo="Agendamentos"
          valor={agendamentos.length}
        />

        <DashboardCard
          titulo="Faturamento"
          valor={formatarPreco(faturamento)}
        />

        <DashboardCard
          titulo="Serviços"
          valor={servicos.length}
        />
      </section>

      <section className="dashboard-agendamentos">
        <h2>Próximos agendamentos</h2>

        {proximosAgendamentos.map(item => (
          <Appointment
            key={item.id}
            horario={item.horario}
            cliente={item.cliente}
            servico={item.servico}
          />
        ))}

        {agendamentos.length === 0 && (
          <p>Nenhum agendamento cadastrado.</p>
        )}
      </section>
    </main>
  )
}

export default Dashboard
