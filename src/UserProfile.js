import React, {Component} from 'react';

class UserProfile extends Component {

  constructor(props){
    super(props)

    this.state = {
      username: this.props.username
    }
  }

  render() {
    return (
      <div>
        <h3>Hi! {this.state.username}</h3>
      </div>
    );
  }

}

export default UserProfile;
