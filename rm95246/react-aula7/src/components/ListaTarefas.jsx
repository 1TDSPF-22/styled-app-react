import React, { useState } from 'react';
import Tarefa from './Tarefa';
import styled from 'styled-components';

const DivLista = styled.div`
    width: 100%;
    min-height: 85vh;
    background-color: #ffb;
    padding: 20px;
    border: 2px solid #ccc;
    display: flex; flex-wrap: wrap;
    justify-content: space-around;
`


export default function ListaTarefas(){

    const [tarefa, setTarefa] = useState([
        {
            titulo: "Lista de Pagamento",
            setor: "Dep. Vendas",
            descricao: "Levantar os valores de vendas.",
        },
        {
            titulo: "Planilha de salários",
            setor: "Dep. Pessoal",
            descricao: "Gerar planilhas.",
        },
        {
            titulo: "Lançar notas do Challenge IBM",
            setor: "Graduação",
            descricao: "Lançar notas dos grupos no portal.",
        },
    ])

    //Criando uma função para adicionar tarefas
    const addTarefa = ()=>{
        const novaTarefa = {
            titulo: "Planilha de notas",
            setor: "Graduação",
            descricao: "Lançar notas dos exercícios.",
        }

        setTarefa([...tarefa, novaTarefa])
    }

    return(
        
        <div>
            <p>Lista de Tarefas</p>
            <div>
                <button onClick={addTarefa}>ADD-TAREFA</button>
            </div>
            <DivLista>
                {tarefa.map((t,i)=>
                <Tarefa
                    key={i}
                    id={i + 1}
                    titulo={t.titulo}
                    setor={t.setor}
                    descricao={t.descricao}
                    />
                )}
                
                <Tarefa/>
            </DivLista>
        </div>

    )
}