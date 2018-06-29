import React, { Component } from 'react';
import Pictures from './components/pictures';
import Header from './components/header';
import Body from './components/body';
import './App.css';

class App extends Component {
  // initialize state
  state = { passwords: [] };

  render(){

    return (
      <div className="App">
        <Header />
        <Body />
      </div>
    );
  }
}
export default App;
