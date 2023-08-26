import "./App.css"
import React from 'react';
import { useState } from "react"
import Birds from '../components/Birds/Birds';
import { Routes, Route, Link } from "react-router-dom"
import BirdDetails from "../components/BirdDetails/BirdDetails";
import NewBirdForm from "../components/NewBirdForm/NewBirdForm"


function App() {
  const [birds, setBirds] = useState([])

  function addBird(data) {
    const newData = [...birds, data]
    setBirds(newData)
  }

  return (
    <>
      <header>
        <h1>
          <a href="/">Audubon Society</a>
        </h1>
        <Link to="/new"> Add New Bird </Link>
      </header>
      <main>
        <Routes>
          <Route path="/" element={ <Birds birds={birds} setBirds={setBirds} /> } />
          <Route path="/details/:id" element={ <BirdDetails /> } />
          <Route path="/new" element={ <NewBirdForm birds={birds} addBird={addBird} /> } />
        </Routes>

      </main>
    </>
  );
}

export default App;
