
import "./Appointment.css"

function Appointment({ horario, cliente, servico, status }) {
  return (
    <div className="appointment">
      <p>{horario}</p>

      <div className="appointment-info">
        <h3>{cliente}</h3>
        <span>{servico}</span>
      </div>

      <span className={`appointment-status ${status === "Pendente" ? "pendente" : ""}`}>
        {status}
      </span>
    </div>
  )
}

export default Appointment
