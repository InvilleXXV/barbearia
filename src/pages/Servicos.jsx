
import "./Servicos.css"
import { useState } from "react"

function Servicos({ servicos, setServicos }) {
  const [nome, setNome] = useState("")
  const [preco, setPreco] = useState("")
  const [mensagem, setMensagem] = useState("")

  function adicionarServico(e) {
    e.preventDefault()

    const nomeLimpo = nome.trim()
    const precoNumerico = Number(preco)

    if (
      !nomeLimpo ||
      preco === "" ||
      !Number.isFinite(precoNumerico) ||
      precoNumerico <= 0
    ) {
      setMensagem("Informe um nome e um preço válido.")
      return
    }

    const novoServico = {
      id: Date.now(),
      nome: nomeLimpo,
      preco: precoNumerico,
    }

    setServicos(listaAtual => [...listaAtual, novoServico])

    setNome("")
    setPreco("")
    setMensagem("Serviço cadastrado com sucesso!")
  }

  function excluirServico(id) {
    setServicos(listaAtual =>
      listaAtual.filter(servico => servico.id !== id)
    )

    setMensagem("Serviço excluído com sucesso!")
  }

  function formatarPreco(valor) {
    return valor.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    })
  }

  return (
    <main className="servicos-page">
      <h1>Serviços</h1>
      <p>Gerencie os serviços oferecidos pela barbearia.</p>

      <form onSubmit={adicionarServico}>
        <input
          type="text"
          placeholder="Nome do serviço"
          value={nome}
          onChange={e => setNome(e.target.value)}
        />

        <input
          type="number"
          placeholder="Preço (R$)"
          min="0.01"
          step="0.01"
          value={preco}
          onChange={e => setPreco(e.target.value)}
        />

        <button type="submit">Cadastrar serviço</button>
      </form>

      {mensagem && <p>{mensagem}</p>}

      <h2>Serviços cadastrados ({servicos.length})</h2>

      <div className="tabela-servicos">
        <table>
          <thead>
            <tr>
              <th>Serviço</th>
              <th>Preço</th>
              <th>Ações</th>
            </tr>
          </thead>

          <tbody>
            {servicos.map(servico => (
              <tr key={servico.id}>
                <td>{servico.nome}</td>
                <td>{formatarPreco(servico.preco)}</td>
                <td>
                  <button
                    type="button"
                    onClick={() => excluirServico(servico.id)}
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

export default Servicos
