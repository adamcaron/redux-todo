import React from 'react';
import logo from './logo.svg';
import './App.css';
import ToDo from './pages/todo'
import { Provider } from 'react-redux'
import configureStore from './modules/store'

function App() {
  return (
    <Provider>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <ToDo />
        </header>
      </div>
    </Provider>
  );
}

export default App;
