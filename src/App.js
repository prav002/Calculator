// src/App.js
import React from 'react';
import './App.css';
import Calculator from './component/Calculators';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Simple Calculator</h1>
      </header>
      <main>
        <Calculator />
      </main>
    </div>
  );
}

export default App;

