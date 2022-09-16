import React, { useState } from 'react'
import Tarefa from './Tarefa'
import { DivLista } from '../style/styled'




export default function ListaTarefas() {

    const [tarefa, setTarefa] = useState([
        {
            titulo: "Lista de Pagamento",
            setor: "Dep. Vendas",
            descricao: "Levantar os valores de Vendas."
        }
        ,
        {
            titulo: "Planilha de Salários",
            setor: "Dep. Pessoal",
            descricao: "Gerar Planilhas"
        }
        ,
        {
            titulo: "Lançar Notas do Challenger",
            setor: "Graduação",
            descricao: "Lançar notas dos grupos no portal Sprint 3."
        }
    ])


    //CRIANDO UMA FUNÇÃO PARA ADICIONAR TAREFAS
    const addTarefa = ()=>{

        const novaTarefa = {
            titulo: " Planilha de Notas",
            setor: "Graduação",
            descricao: "Lançar quem não fez Exercícios"
        }

        setTarefa([...tarefa, novaTarefa])
    } 


    return (
        <div>
            <p>Lista de Tarefas</p>
            <DivLista>
                {tarefa.map((t, i) =>
                    <Tarefa
                        key={i}
                        id={i + 1}
                        titulo={t.titulo}
                        setor={t.setor}
                        descricao={t.descricao}
                    />
                )}

            </DivLista>
            
            <div>
                <button onClick={addTarefa}>ADD-TAREFA</button>
            </div>
        </div>
    )
}