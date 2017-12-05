import React, { Component } from 'react';

class Login extends Component  {
    constructor() {
        super();

        this.state = {
            userName: '',
            passWord: '',
        }
        
        this.buttonPush = this.buttonPush.bind(this);
    }

    handleUpdateUser(e) {
        this.setState({
            userName: e
        })
    }

    handleUpdatePass(e) {
        this.setState({
            passWord: e
        })
    }

    buttonPush() {
        alert(`Logging in ${this.state.userName} with password ${this.state.passWord}`)
    }
    render() {
        return (
            <div>

                <input placeholder="Username" onChange={(e) => this.handleUpdateUser(e.target.value)} />
                <input placeholder="Password" onChange={(e) => this.handleUpdatePass(e.target.value)} />
                <button onClick={ this.buttonPush }>Login</button>
            </div>
        )
    }
}

export default Login;