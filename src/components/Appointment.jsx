function Appointment({ horario, cliente, servico }) {
  return (
    <div className="appointment">

      <p>{horario}</p>
      <h3>{cliente}</h3>
      <span>{servico}</span>

    </div>
  )
}
export default Appointment