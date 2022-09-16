import Tarefa from "../tarefa/Tarefa";
import React, { useState } from "react";
import { DivLista} from "../style/styled";
import FormTarefas from "../formTarefas/FormTarefas";


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

  const [nTarefa, setNTarefa] = useState(
    {
    "titulo": "",
    "setor": "",
    "descricao": ""
  }
);

  //criando uma função para adicionar tarefas
  const addTarefa = (e) => {
    e.preventDefault()
    setNTarefa(
      { 
      "titulo": "",
      "setor": "",
      "descricao": ""
    }
  )

    setTarefa([...tarefa, nTarefa]);
  };

  const captura = (e)=> {
    e.preventDefault()
    const{name, value} = e.target

    if(name === "titulo"){
      setNTarefa(    
      {
        "titulo": value,
        "setor": nTarefa.setor,
        "descricao": nTarefa.descricao
      }
      )
    }
    else if (name === "setor"){
      setNTarefa(    
        {
          "titulo": nTarefa.titulo,
          "setor": value,
          "descricao": nTarefa.descricao
        }
      )
    } 
    else if (name === "descricao"){
      setNTarefa(    
        {
          "titulo": nTarefa.titulo,
          "setor": nTarefa.setor,
          "descricao": value
        }
      )
    } 
  }

  return (
    <div>
      <p>Lista de tarefas</p>
      <div>
        <button onClick={addTarefa}>ADD-TAREFA</button>
      </div>
      <DivLista>
        <FormTarefas digit={captura} novaTarefa={nTarefa} adicionarNovaTarefa={addTarefa}
        />
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
