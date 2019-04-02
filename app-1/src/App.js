import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    text: ''
  }
  updateText=(event)=>{
    console.log(event.target.value)
    this.setState({
      text: event.target.value
    })

  }
  render() {
    return (
      <div className="App">
       <input onChange={this.updateText}></input>
       <h1>{this.state.text}</h1>
      </div>
    
      );
  }
}

export default App;
