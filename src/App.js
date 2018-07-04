import React, { Component } from 'react';
import Login from './container/login';
import Register from './container/register';
import {Route } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Route path="/register" component={Register}></Route>
      <Route path="/login" component={Login}></Route>
      </div>
    );
  }
}

export default App;
