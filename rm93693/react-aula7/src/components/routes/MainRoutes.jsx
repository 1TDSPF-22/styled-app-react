import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../../pages/home/Home";
import ListaTarefas from "../listaTarefas/ListaTarefas";
import Tarefa from "../tarefa/Tarefa";

export default function MainRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lt" element={<ListaTarefas />} />
        <Route path="/add" element={<Tarefa />} />
      </Routes>
    </>
  );
}
