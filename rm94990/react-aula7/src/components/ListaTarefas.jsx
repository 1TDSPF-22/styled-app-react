import React, { useState } from "react";
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
  const [tarefa, setTarefa] = useState([
    {
      titulo: "Lista de Pagamento",
      setor: "Dep. Vendas",
      descricao: "Levantar os valores de Vendas.",
    },
    {
      titulo: "Planilha de Salários",
      setor: "Dep. Pessoal",
      descricao: "Gerar Planilhas.",
    },
    {
      titulo: "As ideia é dura ..",
      setor: "Graduação",
      descricao: "e ngm da valor ..",
    },
  ]);

  //CRIANDO UMA FUNÇÃO PARA ADICIONAR TAREFAS
  const addTarefa = () => {
    const novaTarefa = {
      titulo: "As ideia é dura ..",
      setor: "Graduação",
      descricao: "e ngm da valor ..",
    };

    setTarefa([...tarefa, novaTarefa]);
  };

  return (
    <div>
      <p>Lista de Tarefas</p>
      <div>
        <button onClick={addTarefa}>ADD-TAREFA</button>
      </div>
      <DivLista>
        {tarefa.map((t, i) => (
          <Tarefa
            key={i}
            id={i + 1}
            titulo={t.titulo}
            setor={t.setor}
            descricao={t.descricao}
          />
        ))}
      </DivLista>
    </div>
  );
}
