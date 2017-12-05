import React, {Component} from 'react';

class NewTask extends Component {
    constructor(){
        super();

        this.state = {
            input: ''
        };

        this.handleAdd = this.handleAdd.bind(this);
    }

    handleAdd(){
        this.props.add(this.state.input);
        this.setState({input:''});
    }

    handleInputChange(value){
        this.setState({input:value});
    }



    render(){
        return(
            <div>
            <input 
            value = {this.state.input} placeholder="Add Task" 
            onChange={(e)=>this.handleInputChange(e.target.value)}/>
            <button onClick={this.handleAdd}>Add</button>
            </div>
        )
    }
}

export default NewTask;