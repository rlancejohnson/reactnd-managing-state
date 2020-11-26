import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

export default class App extends Component {
  state = {
    value1: Math.floor(Math.random() * 100),
    value2: Math.floor(Math.random() * 100),
    value3: Math.floor(Math.random() * 100),
    proposedAnswer: function () {
      return (Math.floor(Math.random() * 3) + this.value1 + this.value2 + this.value3);
    },
    numQuestions: 0,
    numCorrect: 0
  }

  setScore = (response) => {
    this.setState(currentState => {
      numCorrect: (currentState.value1 + currentState.value2 + currentState.value3 === Number(currentState.proposedAnswer())) === response ? currentState.numCorrect + 1 : currentState.numCorrect;
      numQuestions: currentState.numQuestions + 1;
      value1: Math.floor(Math.random() * 100);
      value2: Math.floor(Math.random() * 100);
      value3: Math.floor(Math.random() * 100);
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="game">
          <h2>Mental Math</h2>
          <div className="equation">
            <p className="text">{`${this.state.value1} + ${this.state.value2} + ${this.state.value3} = ${this.state.proposedAnswer()}`}</p>
          </div>
          <button onClick={() => this.setScore(true)}>True</button>
          <button onClick={() => this.setScore(false)}>False</button>
          <p className="text">
            Your Score: {this.state.numCorrect}/{this.state.numQuestions}
          </p>
        </div>
      </div>
    );
  }
}