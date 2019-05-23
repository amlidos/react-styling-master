import React, { Component } from 'react';
import Login from './Login';
import UserProfile from './UserProfile';
import passwordHash from 'password-hash';
import './App.css';

class App extends Component {
  constructor(){
    super()

    this.state = {
      username: '',
      password: '',
      verified: false
    }
  }

  encryptPassword = password => passwordHash.generate(password)

  verifyLogin = (e) => {
    e.preventDefault()
    this.setState({verified: passwordHash.verify('password', this.state.password)})
  }

  stateHandler = (e) => {
    let stateClone = Object.assign({}, this.state)
    stateClone[e.target.id] = e.target.id === 'password' ?  this.encryptPassword(e.target.value) : e.target.value

    this.setState(stateClone);
  }


  render() {
    return (
      <div className="App">
        { this.state.verified ?
          <UserProfile username={this.state.username}/>
          :
          <Login
            stateHandler={this.stateHandler}
            verifyLogin={this.verifyLogin}
          />
        }
      </div>
    );
  }
}

export default App;
