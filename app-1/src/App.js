import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import TextBox from './TextBox'

class App extends Component {
    constructor(){
      super();

      this.state = {
        text: ""
      }
      this.handleUpdateText = this.handleUpdateText.bind(this);
    }

    handleUpdateText(event){
      this.setState ({
        text: event
      })
    }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div>
        <input placeholder="Type here" onChange = {(e) => this.handleUpdateText(e.target.value)}/>
        </div>
        <div>
        {this.state.text}
        </div>
        {/* <TextBox/> */}
      </div>
    );
  }
}

export default App;
