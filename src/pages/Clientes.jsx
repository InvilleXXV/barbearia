
import "./Clientes.css"
import { useState } from "react"

function Clientes({ clientes, setClientes }) {
  const [nome, setNome] = useState("")
  const [telefone, setTelefone] = useState("")
  const [mensagem, setMensagem] = useState("")

  function adicionarCliente(e) {
    e.preventDefault()

    if (!nome.trim() || !telefone.trim()) {
      setMensagem("Preencha o nome e o telefone.")
      return
    }

    const novoCliente = {
      id: Date.now(),
      nome: nome.trim(),
      telefone: telefone.trim(),
    }

    setClientes(listaAtual => [...listaAtual, novoCliente])

    setNome("")
    setTelefone("")
    setMensagem("Cliente cadastrado com sucesso!")
  }

  function excluirCliente(id) {
    setClientes(listaAtual =>
      listaAtual.filter(cliente => cliente.id !== id)
    )

    setMensagem("Cliente excluído com sucesso!")
  }

  
  return (
    <main className="clientes-page">
      <h1>Clientes</h1>
      <p>Gerencie os clientes cadastrados na barbearia.</p>

      <form onSubmit={adicionarCliente}>
        <input
          type="text"
          placeholder="Nome do cliente"
          value={nome}
          onChange={e => setNome(e.target.value)}
        />

        <input
          type="tel"
          placeholder="Telefone"
          value={telefone}
          onChange={e => setTelefone(e.target.value)}
        />

        <button type="submit">Cadastrar cliente</button>
      </form>

      {mensagem && <p>{mensagem}</p>}

      <h2>Clientes cadastrados ({clientes.length})</h2>

      <div className="tabela-clientes">
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Telefone</th>
              <th>Ações</th>
            </tr>
          </thead>

          <tbody>
            {clientes.map(cliente => (
              <tr key={cliente.id}>
                <td>{cliente.nome}</td>
                <td>{cliente.telefone}</td>
                <td>
                  <button
                    type="button"
                    onClick={() => excluirCliente(cliente.id)}
                  >
                    Excluir
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  )

}

export default Clientes
