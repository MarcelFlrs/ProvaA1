import { useEffect, useState } from "react";
import { Tarefa } from "../../../interfaces/Tarefa";
import React from "react";

function TarefaListar() {
  const [tarefas, setTarefas] = useState<Tarefa[]>([]);

  
  useEffect(() => {
    console.log("Executar algo ao carregar o componente...");
    carregarProdutos();
  }, []);

    function carregarProdutos() {
    fetch("http://localhost:5000/tarefas/listar")
      .then((resposta) => resposta.json())
      .then((tarefas: Tarefa[]) => {
        setTarefas(tarefas);
        console.table(tarefas);
      })
      .catch((erro) => {
        console.log("Deu erro!");
      });
  }


  return (
    <div>
      {/* <button onClick={cadastrarProduto}>Cadastrar Produto</button> */}
      <h1>Listar Produtos</h1>
      <table border={1}>
        <thead>
          <tr>
            <th>#</th>
            <th>Titulo</th>
            <th>Descrição</th>
            <th>Categoria</th>
            <th>Status</th>
            <th>Criado Em</th>
          </tr>
        </thead>
        <tbody>
          {tarefas.map((tarefa) => (
            <tr>
              <td>{tarefa.tarefaId}</td>
              <td>{tarefa.titulo}</td>
              <td>{tarefa.descricao}</td>
              <td>{tarefa.categoria}</td>
              <td>{tarefa.status}</td>
              <td>{tarefa.criadoEm}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default TarefaListar;