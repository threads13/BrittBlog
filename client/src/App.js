import React, { Component } from 'react';
import Navbar from './components/navbar';
import Carousel from './components/carousel';
import Pictures from './components/pictures';
import Header from './components/header';
import './App.css';

class App extends Component {
  // initialize state
  state = { passwords: [] };

  render(){

    return (
      <div className="App">
        <Navbar />
        <Header />
        <Carousel />
        <Pictures />
      </div>
    );
  }
}
export default App;
