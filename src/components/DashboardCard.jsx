import "./DashboardCard.css"
import { Users, CalendarCheck, Wallet, Scissors } from "lucide-react"

function DashboardCard({ titulo, valor }) {
  const icones = {
    Clientes: Users,
    Agendamentos: CalendarCheck,
    Faturamento: Wallet,
    Serviços: Scissors,
  }

  const Icone = icones[titulo]

  return (
  <div className="summary-card">
    <div className="summary-card-topo">
      <h2>{titulo}</h2>
      {Icone && <Icone size={24} />}
    </div>

    <p>{valor}</p>
  </div>
  )
}

export default DashboardCard
