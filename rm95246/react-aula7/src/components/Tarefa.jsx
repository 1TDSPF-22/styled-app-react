import React from 'react';
import styled from 'styled-components';

//Criando um módulo
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

export default function Tarefa(){
    return(
        
        <DivTarefa>
            <h2>Relatório de vendas</h2>
            <p>Para: Departamento de Vendas</p>
            <p>Levantar os valores de vendas deste mês.</p>
        </DivTarefa>

    )
}
