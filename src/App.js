import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Question from './Question.js';
import Score from './Score.js';

export default class App extends Component {
  state = {
    numQuestions: 0,
    numCorrect: 0
  }  

  setScore = (answerCorrect) => {
    this.setState(curState => ({
      numQuestions: curState.numQuestions + 1,
      numCorrect: answerCorrect ? curState.numCorrect + 1 : curState.numCorrect
    }))
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
          <Question setScore={this.setScore}/>
          <Score numCorrect={this.state.numCorrect} numQuestions={this.state.numQuestions}/>
        </div>
      </div>
    );
  }
}