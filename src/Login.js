import React, {Component} from 'react';
import {emojify} from 'react-emojione';
import './login.css';

class Login extends Component {

  render() {
    return (
      <div className="login-form">
        <div className='login-header'>
          <h2> {emojify(':wave:')} Hi! Please Login </h2>
        </div>
        <br/>
        <form>
          <div className="login-input">
            <input id="username" type="text" placeholder="Enter Username" onChange={this.props.stateHandler}/>
          </div>
          <div className="login-input">
            <input id="password" type="password" placeholder="Password" onChange={this.props.stateHandler}/>
          </div>
          <button onClick={this.props.verifyLogin}>Login</button>
        </form>
      </div>
    );
  }
}

export default Login;