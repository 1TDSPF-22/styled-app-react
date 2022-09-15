import React from "react";
import Tarefa from "./Tarefa";

export default function ListaTarefas(){
    return(
        <div>
            <p>Lista de tarefas</p>
            <div>
                <Tarefa/>
                <Tarefa/>
                <Tarefa/>
            </div>
        </div>
    )
}