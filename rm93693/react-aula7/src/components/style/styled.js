import styled from "styled-components"

export const DivLista = styled.div`
  width: 100%;
  min-height: 85vh;
  padding: 20px;
  background-color: #ccc;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export const DivTarefa = styled.div`
  background-color: #ffb;
  border: 2px solid #333;
  box-shadow: 5px 5px 5px #333;
  padding: 20px;
  text-align: center;
  width: 350px;
  height: 200px;
  margin: 10px;
  h2,
  p {
    padding-bottom: 10px;
  }
`;

export const BotaoFechar = styled.button`
    max-width: 4vw;
    color: #fff;
    max-height: 4vh;
    background-color: tomato;
    border: 1px solid #000000;
    padding: 2%;

    &:hover{
        background-color: blue;
    }
`