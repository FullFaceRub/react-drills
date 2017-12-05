import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      tempArr: ["This", "is", "not", "the", "best", "!"]
    }
  }


  // handleMakeList(array) {
    


  //   )
  // }
  // this.handleMakeList = this.handleMakeList.bind(this);

render() {
  var appList = this.state.tempArr.map((param, index) => {
    
          return <h1 key = {index}>{param}</h1>
        })

  return (
    <div className="App">
      <div>
        {appList}
      </div>
    </div>
  );
}








}
export default App;
