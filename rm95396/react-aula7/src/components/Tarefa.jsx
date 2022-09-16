import React from 'react'
import styled from 'styled-components'

//CRIANDO UM MÓDULO
const DivTarefa = styled.div`
       background-color : #ffb;
    border : 2px solid #333;
    box-shadow : 5px 5px 5px #333;
    padding: 2vh 2vw;
    text-align:center;
    width:50vw;
    height:20vh;
    margin:5vh 30vw;
    h2,p{
            padding-bottom:1vh
        }

`


export default function Tarefa(props) {
    return (
        <DivTarefa>
            <h2>{props.titulo}</h2>
            <p>{props.setor}</p>
            <p>{props.descricao}</p>
            <p>{props.id}</p>
        </DivTarefa>
    )
}

