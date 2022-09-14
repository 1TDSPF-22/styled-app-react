import React from 'react'

export default function FormTarefas(props) {
  return (
    <div>
        <form method="post">
            <fieldset>
                <legend>Tarefas</legend>
                <div>
                    <label>Titulo</label>
                    <input type="text" name="titulo" placeholder='Titulo' value="" />
                </div>
                <div>
                    <label>Setor</label>
                    <input type="text" name="setor" placeholder='Setor' value="" />
                </div>
                <div>
                    <label>Descrição</label>
                </div>
                    <textarea name="descricao" cols="30"row="10" placeholder="Descrição" value=""></textarea>
               <div> <button type='submit'>Adicionar</button></div>
            </fieldset>
        </form>
    </div>
  )
}
