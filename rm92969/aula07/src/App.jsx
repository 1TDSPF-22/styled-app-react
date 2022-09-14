import react from 'react'
import Home from './components/home/Home'
import ListaTarefas from './components/listaTarefas/ListaTarefas'
import MainRoutes from './routes/MainRoutes'

export default function App() {
    return(
        <div>
            <h1>Estudos de styled-componentes</h1>
            <Home/>
            <MainRoutes />
        </div>

    )
}