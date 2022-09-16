import React from 'react'
import { DivTarefa } from '../../style/styled'

//Criando um módulo


export default function Tarefas(props) {
  return (
    <DivTarefa>
        <h2>{props.titulo}</h2>
        <p>Para: {props.setor} </p>
        <p>{props.descricao}</p>
        <p>{props.id}</p>
    </DivTarefa>
  )
}
