import React from 'react'

export default function FormTarefas(props) {
  return (
    <div>
        <form method="post" onSubmit={props.addTarefas}>
            <div>
                <input name="titulo" placeholder='Titulo' value={props.tarefa.titulo} onChange={props.digit}/>
            </div>
            <div>
                <input name="setor" placeholder='Setor' value={props.tarefa.setor} onChange={props.digit}/>
            </div>
            <div>
                <input name="descricao" placeholder='Descrição' value={props.tarefa.descricao} onChange={props.digit}/>
            </div>
            <button type='submit'>Adicionar</button>
        </form>
    </div>
  )
}
