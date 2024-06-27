import React from "react";
import TarefaListar from "./components/pages/tarefa/listar";
import TarefaCadastrar from "./components/pages/tarefa/cadastrar";
import { BrowserRouter, Link, Routes ,Route } from "react-router-dom";


function App() {
  return (
    <div>
      <div>
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/produto/listar">Listar Produtos</Link>
            </li>
            <li>
              <Link to="/produto/cadastrar">Cadastrar Produtos</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<TarefaListar />} />
          <Route path="/produto/listar" element={<TarefaListar />} />
          <Route
            path="/produto/cadastrar"
            element={<TarefaCadastrar />}
          />

        </Routes>
        <footer>
          <p>Desenvolvido por Diogo Steinke Deconto</p>
        </footer>
      </BrowserRouter>
    </div>
      
    </div>
  );
}

export default App;
