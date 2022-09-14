import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from '../components/home/Home'
import ListaTarefas from '../components/listaTarefas/ListaTarefas'

export default function MainRoutes() {
  return (
    <>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/lt' element={<ListaTarefas/>}></Route>
            <Route path='/add' element={<FormTarefas/>}></Route>
        </Routes>


    </>
  )
}
