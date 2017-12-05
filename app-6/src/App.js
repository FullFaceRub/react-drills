import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './Todo';

class App extends Component {
    constructor(){
      super();

      this.state = {
        list: [],
        userInput: ""
      }
      this.updateUserInput = this.updateUserInput.bind(this);
      this.addTask = this.addTask.bind(this);
    }
    
    updateUserInput(value){
      this.setState ({
        userInput: value
      })
    }

    addTask(){
      this.setState({
        list: [...this.state.list,this.state.userInput],
        userInput: ""
      })
    }
    
  render() {

      var list = this.state.list.map((e,i)=>{
        return <Todo key={i} task={e}/>
      })

    return (
      <div className="App">
        <div>
          <h1>To-Do List:</h1>
        </div>
        <div>
          <input value={this.state.userInput} onChange = {(e)=>this.updateUserInput(e.target.value)}/>
          <button onClick = {this.addTask}>Add</button>
        </div>
        <div>
          {list}
        </div>
      </div>
    );
  }
}

export default App;
