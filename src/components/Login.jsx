import React, { Component } from 'react';
import Input from './Input';

class Login extends Component {
 
    state ={
        account:{
            email:'',
            password:''
        }
    };
    handleSubmit = e => {
        e.preventDefault();

        // call the server
        console.log("submitted")
    };

    handleChange = ({currentTarget: input}) =>{
        const account = { ...this.state.account};
        account[input.name] = input.value;
        this.setState({account})
    };  

    render() {
        const {account} = this.state;
        return (
            <div className="container">
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                   <Input 
                   name="email"
                   value={account.email}
                   label="Username"
                   onChange={this.handleChange}
                   />
                   <Input 
                   name="password"
                   value={account.password}
                   label="Password"
                   onChange={this.handleChange}
                   />
                    
                    <button className="btn btn-primary">Login</button>
                </form>
            </div>
        )
    }
}

export default Login;
