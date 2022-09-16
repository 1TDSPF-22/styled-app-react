import React, { useState } from 'react';
import Tarefa from './Tarefa';
import { DivLista } from '../style/styled'
import FormTarefas from './FormTarefas';

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

    const[nTarefa, setNTarefa] = useState({"titulo" : "", "setor" : "", "descricao" : ""})

    //Criando uma função para adicionar tarefas
    const addTarefa = (e)=>{
        e.preventDefault()
        setNTarefa({"titulo" : "", "setor" : "", "descricao" : ""})
        setTarefa([...tarefa, nTarefa])
    }

    const captura = (e)=>{
        e.preventDefault()
        
        const{name, value} = e.target

        if(name === "titulo"){
            setNTarefa({"titulo" : value, "setor" : nTarefa.setor, "descricao" : nTarefa.descricao})
        }else if(name === "setor"){
            setNTarefa({"titulo" : nTarefa.titulo, "setor" : value, "descricao" : nTarefa.descricao})
        }else if(name === "descricao"){
            setNTarefa({"titulo" : nTarefa.titulo, "setor" : nTarefa.setor, "descricao" : value})
        }
    }

    return(
        
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