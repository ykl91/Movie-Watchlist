import React, { Component } from 'react';
import { Input } from 'react-materialize';
import './Authentication.css';


class Login extends Component{
  constructor(props){
    super(props);

    this.state = {
      username : '',
      password : '',
      errorMsg : ''
    };
  }

  updateUserDetails(event){
    let inputFieldValue = event.currentTarget.value;
    let inputFieldName = event.currentTarget.name;

    let stateClone = JSON.parse(JSON.stringify(this.state));
    stateClone[inputFieldName] = inputFieldValue;

    this.setState(stateClone);
  }

  validate(){
    let errorMsg = '';

    // TODO
    if(this.state.username.length < 4 || (/\[([^\]]+)]/).test(this.state.username)){
      errorMsg = "Username needs to be at least 4 characters long and not contain special characters like < > [] ()";
    }

    if((/\[([^\]]+)]/).test(this.state.password) || this.state.password.length < 4){
      errorMsg = "Passwords do not match or contain invalid characters";
    }

    if(errorMsg !== ''){
      this.setState({
        errorMsg : errorMsg
      });
    }
    else{
      this.setState({
        errorMsg : ''
      });
    }

    return errorMsg !== '' ? false : true;
  }

  submitLoginForm(){
    let valid = this.validate();

    if(valid){
      //submit form
      this.setState({errorMsg : ''});
      console.log("form is valid");
      console.log(this.state.errorMsg);
    }
    else{
      //ask users to fix errors
      console.log("form is invalid");
      console.log(this.state.errorMsg);
    }
  }

  render(){
    return (
      <div className="login">
        <h1>Login</h1>
        <form>
          <Input 
            name="username" 
            type="text" 
            placeholder="Write your username" 
            label="Username"
            onChange={ (event) => this.updateUserDetails(event) }
          />
          <Input 
            name="password" 
            type="password" 
            placeholder="Choose a password" 
            label="Password"
            onChange={ (event) => this.updateUserDetails(event) }
            required
          />
        </form>
        <div className="button"><button onClick={ () => this.submitLoginForm() }>Login</button></div>
      </div>
    );
  }
}

export default Login;

/*
  username
  password
*/