import React from 'react';
import './App.css';
import _ from 'lodash';
import { QueryPayload } from 'simple-shared-data';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          {_.toUpper('Learn React')}
        </a>
        <button
          onClick={() => {
            fetch('http://localhost:3001/', {})
              .then((response) => response.json())
              .then((data: QueryPayload) => console.log(data.payload));
          }}
        >
          GET SOME DATA
        </button>
      </header>
    </div>
  );
}

export default App;
