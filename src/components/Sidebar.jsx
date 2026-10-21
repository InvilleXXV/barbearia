import './Sidebar.css'
function Sidebar({ setPaginaAtual, paginaAtual }) {
    return (
<aside className="sidebar">
        <h1>Barbearia</h1>

<nav>

     
    <a
    href="#"
    className={paginaAtual === "dashboard" ? "ativo" : ""}
    onClick={(e) => {
    e.preventDefault()
    setPaginaAtual("dashboard")
    }}>Dashboard
    </a>

    <a
    href="#"
    className={paginaAtual === "agenda" ? "ativo" : ""}
    onClick={(e) => {
    e.preventDefault()
    setPaginaAtual("agenda")
    }}>Agenda
    </a>

    <a
    href="#"
    className={paginaAtual === "clientes" ? "ativo" : ""}
    onClick={(e) => {
    e.preventDefault()
    setPaginaAtual("clientes")
    }}>Clientes
    </a>

    <a
    href="#"
    className={paginaAtual === "servicos" ? "ativo" : ""}
    onClick={(e) => {
    e.preventDefault()
    setPaginaAtual("servicos")
    }}>Servicos
    </a>

</nav>

    <div className="sidebar-perfil">
     <strong>Allan Gomes</strong>
     <span>barbeiro</span>
    </div>
</aside>
)
}

export default Sidebar