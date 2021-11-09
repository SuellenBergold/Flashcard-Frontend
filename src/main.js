//
import React from "react";
//
import Home from "./components/home/home";
//
import Cursos from "./components/cursos/cursos";
//
import Adicionar from "./components/cursos/adict"
//
import { Container } from 'react-materialize';
//
import { Routes, Route } from 'react-router-dom'

const Main = (props) => (
  <main>
    <Container>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/cursos' element={<Cursos coursesDados={props.coursesDados}/>}/>
        <Route path='/adicionar' element={<Adicionar/>}/>
      </Routes>
    </Container>
  </main>  
);

export default Main;