import React from 'react'
import { DivTarefa, BotaoFechar } from '../../style/styled'

//Criando um módulo


export default function Tarefas(props) {
  return (
    <DivTarefa>
      <BotaoFechar>X</BotaoFechar>
        <h2>{props.titulo}</h2>
        <p>Para: {props.setor} </p>
        <p>{props.descricao}</p>
        <p>{props.id}</p>
    </DivTarefa>
  )
}
