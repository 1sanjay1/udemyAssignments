import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {

  state = {
    username : "Stark"
  };

  changeHandle = (e) => {
    this.setState({
      username : e.target.value
    });
  };

  render() {
    return (
      <div className="App">
        <UserInput changeHandle={this.changeHandle} />
        
        <UserOutput username={ this.state.username }/>
        <UserOutput username={ this.state.username }/>
        <UserOutput username={ this.state.username }/>
      </div>
    );
  }
}

export default App;
