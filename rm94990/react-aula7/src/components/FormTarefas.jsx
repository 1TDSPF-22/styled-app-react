import React from "react";

export default function FormTarefas(props) {
  return (
    <div>
      <form method="post">
        <fieldset>
          <legend>Tarefas</legend>
          <div>
            <label>Título</label>
            <input type="text" name="titulo" placeholder="Título" value="" />
          </div>
          <div>
            <label>Setor</label>
            <input type="text" name="setor" placeholder="Setor" value="" />
          </div>
          <div>
            <label>Descrição</label>
            <textarea
              name="descricao"
              cols="30"
              rows="10"
              placeholder="Descrição"
              value=""
            ></textarea>
          </div>
          <div>
            <input type="submit" value="Adicionar" />
          </div>
        </fieldset>
      </form>
    </div>
  );
}
