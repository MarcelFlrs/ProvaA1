import { useState } from "react";
import { Tarefa } from "../../../interfaces/Tarefa";
import React from "react";

function TarefaCadastrar() {
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [categoria, setCategoria] = useState("");
  const [status, setStatus] = useState("");

  function cadastrar(e: any) {
    e.preventDefault();
    const tarefa: Tarefa = {
      titulo: titulo,
      descricao: descricao,
      categoria: categoria,
      status: status,
    };
    
    fetch("http://localhost:5000/tarefas/cadastrar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(tarefa),
    })
      .then((resposta) => resposta.json())
      .then((tarefaCadastrada: Tarefa) => {
        console.log(tarefaCadastrada);
      });
  }

  return (
    <div>
      <h1>Cadastrar Tarefa</h1>
      <form onSubmit={cadastrar}>
        <label>Título:</label>
        <input
          type="text"
          onChange={(e: any) => setTitulo(e.target.value)}
          required
        />{" "}
        <br />
        <label>Descrição:</label>
        <input
          type="text"
          onChange={(e: any) => setDescricao(e.target.value)}
        />{" "}
        <br />
        <label>Categoria:</label>
        <input
          type="text"
          onChange={(e: any) => setCategoria(e.target.value)}
        />{" "}
        <br />
        <label>Status:</label>
        <input
          type="text"
          onChange={(e: any) => setStatus(e.target.value)}
        />{" "}
        <br />
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}

export default TarefaCadastrar;