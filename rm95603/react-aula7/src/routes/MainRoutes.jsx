import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import FormTarefas from '../components/FormTarefas'
import Home from '../components/Home'
import ListaTarefas from '../components/ListaTarefas'

export default function MainRoutes() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/lt" element={<ListaTarefas/>} />
                <Route path="/add" element={<FormTarefas/>} />
            </Routes>
        </>
    )
}
