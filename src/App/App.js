import React from 'react';
import "./App.css"
import Birds from '../components/Birds';

function App() {
  return (
    <>
      <header>
        <h1>
          <a href="/">Audubon Society</a>
        </h1>
      </header>
      <main>
          <Birds />
      </main>
    </>
  );
}

export default App;
