import React, { useState } from "react";
import Tarefa from "./Tarefa";
import { DivLista } from '../style/styled'
import FormTarefas from './FormTarefas'




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

  const[nTarefa, setNTarefa] = useState({"titulo" : "", "setor" : "","descricao" : ""}) 

    //CRIANDO UMA FUNÇÃO PARA ADICIONAR TAREFAS
    const addTarefa = (e) => {
        e.preventDefault()
        setNTarefa({"titulo" : "", "setor" : "","descricao" : ""})
        setTarefa([...tarefa, nTarefa])
    }

    const captura = (e) => {

      e.preventDefault()
      const {name, value} = e.target

      if(name === "titulo"){
        setNTarefa({"titulo" : value, "setor" : nTarefa.setor,"descricao" : nTarefa.descricao})
      } else if(name === "setor") {
        setNTarefa({"titulo" : nTarefa.titulo, "setor" : value,"descricao" : nTarefa.descricao})
      } else if (name === "descricao") {
        setNTarefa({"titulo" : nTarefa.titulo, "setor" : nTarefa.setor,"descricao" : value})
      }
    }

  return (
    <div>
      <p>Lista de Tarefas</p>
      <div>
        <button onClick={addTarefa}>ADD-TAREFA</button>
      </div>
      <DivLista>
        <FormTarefas 
          digit={captura}
          novaTarefa={nTarefa}
          adicionarNovaTarefa={addTarefa}
        />
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
