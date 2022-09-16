import React from 'react'
import { BotaoFechar, DivTarefa } from '../style/styled'

export default function Tarefa(props) {
    return (
        <DivTarefa>
            <BotaoFechar>X</BotaoFechar>
            <h2>{props.titulo}</h2>
            <p>{props.setor}</p>
            <p>{props.descricao}</p>
            <p>{props.id}</p>
        </DivTarefa>
    )
}

