import React, { Component } from 'react';
import { Router, Route, browserHistory, Link } from 'react-router';
import { Provider } from 'react-redux';
//import logo from './logo.svg';
import store from './store';
import NewInput from './components/NewInput.jsx';
import Display from './components/Display.jsx';
import ListContainer from './components/ListContainer';
import Dropdown from './components/Dropdown'
import './App.css';

class MainLayout extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React, Klas</h2>
          <ul>
            <li><Link to="/" activeClassName="active">Home</Link></li>
            <li><Link to="/Other" activeClassName="active">Other</Link></li>
          </ul>
        </div>
        {this.props.children}
      </div>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <NewInput />
        <Display />
        <Dropdown />
        <ListContainer />
      </div>
    );
  }
}

const Other = () => {
  return <p>Other</p>
}

export default (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route component={MainLayout}>
        <Route path="/" component={App} />
        <Route path="Other" component={Other} />
      </Route>
    </Router>
  </Provider>
);
