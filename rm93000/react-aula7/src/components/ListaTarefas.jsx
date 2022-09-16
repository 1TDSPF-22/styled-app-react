import React, { useState } from 'react'
import Tarefa from './Tarefa'
import { DivLista } from '../style/styled'
import FormTarefas from './FormTarefas'

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
            titulo: "Lançar Notas do Challenge",
            setor: "Graduação",
            descricao: "Lançar notas dos grupos no portal Sprint 3."
        }
    ])

    const[nTarefa, setNTarefa] = useState({"título": "", "setor" : "", "descricao" : ""})

    //CRIANDO UMA FUNÇÃO PARA ADICIONAR TAREFAS
    const addTarefa = (e) => {
        e.preventDefault()
        setNTarefa({"titulo" : "", "setor" : "","descricao" : ""})
        setTarefa([...tarefa, nTarefa])
    }

    const captura = (e)=>{
        e.preventDefault()

        const{name, value} = e.target
        if(name === "titulo"){
            setNTarefa({"título": value, "setor" : nTarefa.setor, "descricao" : nTarefa.descricao})
        } else if (name === "setor"){
            setNTarefa({"título": nTarefa.titulo, "setor" : value, "descricao" : nTarefa.descricao})
        } else if (name === "descricao"){
            setNTarefa({"título": nTarefa.titulo, "setor" : nTarefa.setor, "descricao" : value})
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
                addNovaTarefa={addTarefa}/>

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

        </div>
    )
}
