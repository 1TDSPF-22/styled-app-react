import React from "react";
import { BtnFechar, DivTarefa } from "../style/styled";
export default function Tarefa(props) {
	return (
		<DivTarefa>
			<BtnFechar>X</BtnFechar>
			<h2>{props.titulo}</h2>
			<p>{props.setor}</p>
			<p>{props.descricao}</p>
			<p>{props.id}</p>
		</DivTarefa>
	);
}
