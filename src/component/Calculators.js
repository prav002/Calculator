// src/Calculator.js
import React, { useState } from 'react';

function Calculators() {
  const [input, setInput] = useState('');

  const handleInput = (value) => {
    setInput(input + value);
  };

  const clearInput = () => {
    setInput('');
  };

  const calculateResult = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput('Error');
    }
  };

  return (
    <div className="calculator">
      <div className="display">{input}</div>
      <div className="buttons">
        <div className="row">
          <button onClick={() => handleInput('7')}>7</button>
          <button onClick={() => handleInput('8')}>8</button>
          <button onClick={() => handleInput('9')}>9</button>
          <button onClick={() => handleInput('/')}>/</button>
        </div>
        <div className="row">
          <button onClick={() => handleInput('4')}>4</button>
          <button onClick={() => handleInput('5')}>5</button>
          <button onClick={() => handleInput('6')}>6</button>
          <button onClick={() => handleInput('*')}>*</button>
        </div>
        <div className="row">
          <button onClick={() => handleInput('1')}>1</button>
          <button onClick={() => handleInput('2')}>2</button>
          <button onClick={() => handleInput('3')}>3</button>
          <button onClick={() => handleInput('+')}>+</button>
        </div>
        <div className="row">
          <button onClick={() => handleInput('0')}>0</button>
          <button onClick={clearInput}>C</button>
          <button onClick={calculateResult}>=</button>
          <button onClick={() => handleInput('-')}>-</button>
        </div>
      </div>
    </div>
  );
}

export default Calculators;
