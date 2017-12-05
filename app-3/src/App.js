import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor(){
      super();

      this.state = {
        myArray: ["John","Jacob","Jingle","Highmer","Schmitt"],
        newArray: ["John","Jacob","Jingle","Highmer","Schmitt"]
        // userInput: ""
      }
      this.handleListFilter = this.handleListFilter.bind(this);
    }

    // handleUpdateInput(e){
    //   this.setState({
    //     userInput: e
    //   })
    // }
    handleListFilter(e){

      var tempArr = []
      for (var i=0; i<this.state.myArray.length; i++){
          if (this.state.myArray[i].includes(e)===true){
              tempArr.push(this.state.myArray[i])
          }
      }

      this.setState ({
        newArray: tempArr
      })
    }
  render() {

    var list = this.state.newArray.map((element, index) =>{
      return <h1 key={index}>{element}</h1>
    })

    return (
      <div className="App">
        <div>
        <input onChange = {(e) => this.handleListFilter(e.target.value)}/>
        </div>
        <div>
          {list}
        </div>
      </div>
    );
  }
}

export default App;
