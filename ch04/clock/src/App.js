import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.launchClock()
    this.state = {
      currentTime: (new Date()).toLocaleString()
    }
  }
  launchClock() {
    setInterval(()=>{
      console.log('Updating time...')
      this.setState({
        currentTime: (new Date()).toLocaleString()
          })
    },1000)
  }
  render() {
    console.log('Rendering Clock...')
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to the Clock App</h1>
        </header>
        <p className="App-intro">
          {this.state.currentTime}
        </p>
      </div>
    );
  }
}

export default App;
