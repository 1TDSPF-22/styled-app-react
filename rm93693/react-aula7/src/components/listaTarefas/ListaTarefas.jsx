import React, { useState } from "react";
import styled from "styled-components";
import Tarefa from "../tarefa/Tarefa";

const DivLista = styled.div`
  width: 100%;
  min-height: 85vh;
  padding: 20px;
  background-color: #ccc;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export default function ListaTarefas() {
  const [tarefa, setTarefa] = useState([
    {
      titulo: "Lista de pagamentos",
      setor: "Dep. Vendas",
      descricao: "Levantar os valores das vendas",
    },
    {
      titulo: "Planilha de Salários",
      setor: "Dep. Pessoal",
      descricao: "Gerar planilhas",
    },
    {
      titulo: "Lançar notas do challenge",
      setor: "Dep. Graduação",
      descricao: "Lançar notas dos grupos no portal sprint 3",
    },
  ]);

  //criando uma função para adicionar tarefas
  const addTarefa = () => {
    const novaTarefa = {
      titulo: "Planilha de notas",
      setor: "Dep. Graduação",
      descricao: "Lançar quem não fez os exercícios.",
    };

    setTarefa([...tarefa, novaTarefa]);
  };

  return (
    <div>
      <p>Lista de tarefas</p>
      <div>
        <button onClick={addTarefa}>ADD-TAREFA</button>
      </div>
      <DivLista>
        {tarefa.map((tarefa, indice) => (
          <Tarefa
            key={indice}
            id={indice + 1}
            titulo={tarefa.titulo}
            setor={tarefa.setor}
            descricao={tarefa.descricao}
          />
        ))}
      </DivLista>
    </div>
  );
}
