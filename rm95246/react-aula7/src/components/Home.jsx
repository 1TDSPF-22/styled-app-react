import React from "react";
import { Link } from "react-router-dom";

export default function Home(){
    return(
        <div>
            <header>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/lt">Lista de Tarefas</Link>
                    <Link to="/add">Adicionar Tarefa</Link>
                </nav>
            </header>
        </div>
    )
}