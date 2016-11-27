import React, { Component } from 'react';
import { Provider } from 'react-redux';
//import logo from './logo.svg';
import store from './store';
import NewInput from './components/NewInput.jsx';
import './App.css';



class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React, Klas</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <NewInput />
      </div>
    );
  }
}

export default (
  <Provider store={store}>
    <App />
  </Provider>
);
