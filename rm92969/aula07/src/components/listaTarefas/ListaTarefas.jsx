import React, { useState } from 'react'
import Tarefas from "../tarefas/Tarefas"
import { DivLista } from '../../style/styled'
import FormTarefas from '../formTarefas/FormTarefas'


export default function ListaTarefas() {

    const [tarefa, setTarefa] = useState([{
        titulo: 'Lista de Pagamento',
        setor: 'Dep. Vendas',
        descricao: 'Levantar os valores das vendas',
    },
    {
        titulo: 'Planilha de Salários',
        setor: 'Dep. Pessoal',
        descricao: 'Gerar planulhas',
    },
    {
        titulo: 'Lançar Notas do Challenge',
        setor: 'Graduação',
        descricao: 'Lançar notas dos grupos no portal Sprint 3.',
    }])

    //Criando uma função para adicionar tarefas
    const [ntarefa, setNTarefas] = useState({"titulo" : "", "setor" : "", "descricao" : ""})
    const addTarefa = () => {
        
        setNTarefas({"titulo" : "", "setor" : "", "descricao" : ""})
        setTarefa([...tarefa, ntarefa])
    }

    const captura = (e) => {
        e.prevemtDefault()

        const{name, value} = e.target

        if(name === "titulo"){
            setNTarefas({"titulo" : value, "setor" : ntarefa.setor, "descricao" : ntarefa.descricao})
        }else if(name === "setor") {
            setNTarefas({"titulo" : ntarefa.titulo, "setor" : value, "descricao" : ntarefa.descricao})
        }else if(name === "descricao"){
            setNTarefas({"titulo" : ntarefa.titulo, "setor" : ntarefa.setor, "descricao" : value})
        }
    }

  return (
    <DivLista>

        <FormTarefas
            digit={captura}
            novaTarefa={ntarefa}
            adicionarNovaTarefa={addTarefa}
        />

        {tarefa.map((t,i)=>(
            <Tarefas
                key={i}
                id={i+1}
                titulo={t.titulo}
                setor={t.setor}
                descricao={t.descricao}
            />
        ))}
        <div>
            <button onClick={addTarefa}>ADD-TAREFA</button>
        </div>
    </DivLista>
  )
}
