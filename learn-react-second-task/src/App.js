import React, { Component } from 'react';
import './App.css';
import Validation from './Validation/Validation';
import Char from './Char/Char';

class App extends Component {

  state = {
    userInput: ""
  }

  inputChangeHandler = ( event ) => {
    this.setState({
      userInput: event.target.value
    })
  }

  deleteCharHandler = (index) => {
    const text = this.state.userInput.split("");
    text.splice(index, 1);
    const updated = text.join("");
    this.setState({
      userInput: updated
    });
  }

  render() {
    const charList = this.state.userInput.split("").map((char, index) => {
      return <Char 
        clicked={() => this.deleteCharHandler(index)}
        character={char}
        key={index}/> 
    })

    return (
      <div className="App">
        <input 
        type="text"
        onChange={this.inputChangeHandler}
        value={this.state.userInput} />
        <p>{this.state.userInput}</p>
        <Validation inputLength={this.state.userInput.length}/>
        {charList}
      </div>
    );
  } 
}

export default App;