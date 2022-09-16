import React, { useState } from 'react'
import Tarefas from "../tarefas/Tarefas"


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

    const addTarefa = () => {
        const novaTarefa = {
            titulo: 'Planilha de Notas',
            setor: 'Graduação',
            descricao: 'Lançar qem não fez os ecercícios',
        }

        setTarefa([...tarefa, novaTarefa])
    }

  return (
    <DivLista>
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
