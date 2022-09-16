import React from "react";
import Tarefa from "./Tarefa";
import styled from "styled-components";
import { useState } from "react";

const DivLista = styled.div`
width: 100%;
min-height: 85vh;
background-color: #ffb;
padding: 20px;
border: 2px solid #ccc;
display: flex; flex-wrap: wrap;
justify-content: space-around;
`



export default function ListaTarefas() {

    const [tarefa, setTarefa] = useState([
        {
            titulo:"Lista de Pagamento",
            setor:"Dep. vendas",
            descricao: "Levantar os valores de Vendas"
        },
        {
            titulo:"Planilha de salários",
            setor:"Dep. Pessoal",
            descricao: "Gerar Planilhas"
        },
        {
            titulo:"Lançar notas do challenge",
            setor:"Graduação",
            descricao: "Lançar notas dos grupos no portal Sprint 3."
        }
    ])


    return (
        <div>
            <p>Lista de tarefas</p>
            <DivLista>
                {tarefa.map((t,i)=>
                <Tarefa
                key={i}
                id={i+1}
                titulo={t.titulo}
                setor={t.setor}
                descricao={t.descricao}
                />
                )}
            </DivLista>
        </div>
    )
}