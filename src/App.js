import React, { Component } from 'react';
import './App.scss';
import Route from './routes'
import DevTools from 'mobx-react-devtools'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route />
        <DevTools />
      </div>
    );
  }
}

export default App;
