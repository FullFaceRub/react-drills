import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NewTask from './NewTask';
import List from './List';


class App extends Component {
  constructor(){
    super();

    this.state = {
      list: []
    }
    this.addTask=this.addTask.bind(this);

  }

  addTask(task){
    this.setState({
    list: [...this.state.list,task]
    })
  }


  render() {
    return (
      <div className="App">
        <h1>My to-do list:</h1>
        <div><NewTask add={this.addTask}/>
        </div>
        <div><List title="My to-do list:" 
        tasks={this.state.list}/>
        </div>
      </div>
    );
  }
}

export default App;
