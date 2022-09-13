import React from "react";

export default function FormTarefas(props) {
  return (
    <div>
      <form method="post" onSubmit={props.addTarefa}>
        <fieldset>
          <legend>Tarefas</legend>
          <div>
            <input type="text" name="titulo" placeholder="Título" value="" />
          </div>
          <div>
            <input type="text" name="setor" placeholder="Setor" value="" />
          </div>
          <div>
            <textarea
              name="descricao"
              id="descricaoId"
              placeholder="Descrição"
              cols="30"
              rows="10"
            ></textarea>
          </div>
          <button type="submit">Adicionar</button>
        </fieldset>
      </form>
    </div>
  );
}
