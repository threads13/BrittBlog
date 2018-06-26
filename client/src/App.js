import React, { Component } from 'react';
import './App.css';

class App extends Component {
  // initialize state
  state = { passwords: [] };

  componentDidMount(){
    this.getPasswords();
  }

  getPasswords = () => {
    // Get passwords and store them in state
    fetch('/api/passwords')
      .then(res => res.json())
      .then(passwords => this.setState({ passwords }));
  }

  render(){
    const { passwords } = this.state;

    return (
      <div className="App">
        {passwords.length ? (
          <div>
            <h1>5 Passwords.</h1>
            <ul className="passwords">
              {passwords.map((password, index) =>
                <li key={index}>
                  {password}
                </li>
              )}
            </ul>
            <button
              className="more"
              onClick={this.getPasswords}>
              Get More
            </button>
          </div>
        ) : (
          <div>
            <h1>No passworns</h1>
            <button
              className="more"
              onClick={this.getPasswords}>
              Try again?
            </button>
          </div>
        )}
      </div>
    );
  }
}
export default App;
