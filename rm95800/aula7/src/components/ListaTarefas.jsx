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

    const [nTarefa, setNTarefa] = useState({"Título": "", "Setor": "", "Descricao": ""})

    //CRIANDO UMA FUNÇÃO PARA ADICIONAR TAREFAS
    const addTarefa = () => {

        setNTarefa({"Título": "", "Setor": "", "Descricao": ""})
        setTarefa([...tarefa, nTarefa])
    }

    const captura = (evento) =>{
        evento.preventDefault()
        const{name, value} = evento.target
    }

    return (
        <div>
            <p>Lista de Tarefas</p>
            <div>
                <button onClick={addTarefa}>ADD-TAREFA</button>
            </div>
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

            <formTarefas>
                digit = {captura}
            </formTarefas>

        </div>
    )
}