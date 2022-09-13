import React from 'react'
import styled from 'styled-components'
import Tarefas from "./Tarefa"
import { useState } from 'react'

const DivLista = styled.div`
    width: 100%;
    min-height: 85vh;
    padding: 20px;
    background-color: #ccc;
    display: flex; flex-wrap: wrap;
    justify-content: space-around;
`

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
    <div>
            <button onClick={addTarefa}>ADD-TAREFA</button>
    </div>
    <DivLista>
        {tarefa.map((t,i)=>
            <Tarefas
                key={i}
                id={i+1}
                titulo={t.titulo}
                setor={t.setor}
                descricao={t.descricao}
            />
        )}
        
    </DivLista>
  )
}
