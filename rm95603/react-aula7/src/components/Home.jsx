import React from 'react'

export default function Home() {
    return (
        <div>
            <header>
                <nav>
                    <link to="/">Home</link>
                    <link to="/lt">Lista de Tarefa</link>
                    <link to="/add">Adicionar Tarefa</link>
                </nav>
            </header>
        </div>
    )
}