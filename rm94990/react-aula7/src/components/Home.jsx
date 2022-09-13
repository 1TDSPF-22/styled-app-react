import React from "react";

export default function Home() {
  return (
    <div>
      <header>
        <nav>
          <link to="/">Home</link>
          <link to="/lt">Lista de Tarefas</link>
          <link to="/add">Adicionar Tarefas</link>
        </nav>
      </header>
    </div>
  );
}
