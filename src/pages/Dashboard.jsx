
import DashboardHeader from "../components/DashboardHeader"
import DashboardCard from "../components/DashboardCard"
import "./Dashboard.css"


function Dashboard() {
  return (
<main className="dashboard">
<DashboardHeader />

   <section className="dashboard-resumo">
    <DashboardCard titulo="Clientes" valor="32" />
    <DashboardCard titulo="Agendamentos" valor="12" />
    <DashboardCard titulo="Faturamento" valor="R$ 850" />
    <DashboardCard titulo="Serviços" valor="45" />
   </section>

   <section className="dashboard-agendamentos">
    <h2>Próximos agendamentos</h2>

    <div className="agendamento-item">
    <span className="agendamento-horario">09:00</span>
    <div className="agendamento-info">
    <strong>João Silva</strong>
   <span>Corte de cabelo</span>
     </div>
          <span className="agendamento-status">Confirmado</span>
        </div>

        <div className="agendamento-item">
          <span className="agendamento-horario">10:00</span>
          <div className="agendamento-info">
            <strong>Pedro Santos</strong>
            <span>Barba</span>
          </div>
          <span className="agendamento-status">Confirmado</span>
        </div>

        <div className="agendamento-item">
          <span className="agendamento-horario">11:00</span>
          <div className="agendamento-info">
            <strong>Carlos Oliveira</strong>
            <span>Corte + Barba</span>
          </div>
          <span className="agendamento-status">Pendente</span>
        </div>

        <div className="agendamento-item">
          <span className="agendamento-horario">14:00</span>
          <div className="agendamento-info">
            <strong>Marcos Lima</strong>
            <span>Corte de cabelo</span>
          </div>
          <span className="agendamento-status">Confirmado</span>
        </div>
      </section>
    </main>
  )
}

export default Dashboard
