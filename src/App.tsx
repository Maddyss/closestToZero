import React, { useState, FormEvent } from 'react';
import logo from './logo.svg';
import './App.css';
import closestToZero from './action/closestToZero';
import { INPUT_PLACEHOLDER, BUTTON_NAME } from './constantes/app.const';

const App = () => {
  const [data, setData] = useState<string>('');
  const [result, setResult] = useState<number | undefined>(undefined);
  //Calcul et récupération du résultat
  function handleClick() {
    setResult(closestToZero(data));
  }
  //Gestion uniquement pour la mise en forme
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <form onSubmit={e => handleSubmit(e)}>
          <div>
            <input
              type='text'
              name='data'
              value={data}
              onChange={e => setData(e.target.value)}
              placeholder={INPUT_PLACEHOLDER}
            />
          </div>
          <div>
            <button onClick={() => handleClick()}>{BUTTON_NAME}</button>
          </div>
          <div>
            <label>Résultat : </label>
            <div data-testid='result'>{result}</div>
          </div>
        </form>
      </header>
    </div>
  );
};

export default App;
