import "./App.css"
import React from 'react';
import Birds from '../components/Birds/Birds';
import { Routes, Route } from "react-router-dom"
import BirdDetails from "../components/BirdDetails/BirdDetails";

function App() {
  
  return (
    <>
      <header>
        <h1>
          <a href="/">Audubon Society</a>
        </h1>
      </header>
      <main>
        <Routes>
          <Route path="/" element={ <Birds /> } />
          <Route path="/details/:id" element={ <BirdDetails /> } />
        </Routes>
      </main>
    </>
  );
}

export default App;
