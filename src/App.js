import React from 'react';
import './App.css';
import ToDo from './pages/todo'
import { Provider } from 'react-redux'
import configureStore from './modules/store'

const reduxStore = configureStore(window.REDUX_INITIAL_DATA);

function App() {
  return (
    <Provider store={reduxStore}>
      <div className="App">
        <ToDo />
      </div>
    </Provider>
  );
}

export default App;
