import React, { Component } from 'react';
import logo from './logo.svg';
import './styles/App.css';
import TodoList from './components/todolist';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">TODO List</h1>
        </header>
        <div>
          <TodoList/>
        </div>
      </div>
    );
  }
}

export default App;
