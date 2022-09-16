import React from 'react'

export default function FormTarefas(props) {
  return (
    <div>
        <form method="post" onSubmit={props.adicionarNovaTarefa}>
            <fieldset>
                <legend>Tarefas</legend>
                <div>
                    <label>Titulo</label>
                    <input type="text" name="titulo" placeholder='Titulo' value="{props.novaTarefa.titulo}" onChange={props.digit}/>
                </div>
                <div>
                    <label>Setor</label>
                    <input type="text" name="setor" placeholder='Setor' value="{props.novaTarefa.setor}" onChange={props.digit}/>
                </div>
                <div>
                    <label>Descrição</label>
                </div>
                    <textarea name="descricao" cols="30"row="10" placeholder="Descrição" value="{props.novaTarefa.descricao}" onChange={props.digit}></textarea>
               <div> 
                    <button type='submit'>Adicionar</button>
                </div>
            </fieldset>
        </form>
    </div>
  )
}
