import React from "react";
import Tarefa from "./Tarefa";
import styled from "styled-components";

const DivLista = styled.div`
  width: 100%;
  min-height: 85vh;
  background-color: #ffb;
  padding: 20px;
  border: 2px solid #ccc;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export default function ListaTarefas() {
  return (
    <div>
      <p>Lista de Tarefas</p>
      <DivLista>
        <Tarefa />
        <Tarefa />
        <Tarefa />
      </DivLista>
    </div>
  );
}
