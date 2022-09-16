import React from 'react'

export default function FormTarefas(props){
    return(
        <div>
            <form method="post" onSubmit={props.adicionarNovaTarefa}>
                
                <fieldset>
                    <legend>Tarefas</legend>
                    <div>
                        <label>Título</label>
                        <input type="text" name="titulo" placeholder="Título" value={props.novaTarefa.titulo} onChange={props.digit}/>
                    </div>
                    <div>
                        <label>Setor</label>
                        <input type="text" name="setor" placeholder="Setor" value={props.novaTarefa.setor} onChange={props.digit}/>
                    </div>
                    <div>
                        <label>Descrição</label>
                        <textarea name="descricao" cols="30" rows="10 "placeholder="Descrição" value={props.novaTarefa.descricao} onChange={props.digit}/>
                    </div>
                    <div>
                        <input type="submit" value="Adicionar" />
                    </div>
                </fieldset>
            
            </form>
        
        </div>
    )
}