import React, {Component} from 'react';

export default class Question extends Component {
    constructor(props) {
        super(props)

        const questionValues = this.setQuestionValues();

        this.state = {
            value1: questionValues[0],
            value2: questionValues[1],
            value3: questionValues[2],
            proposedAnswer: questionValues[3]
        }
    }

    setQuestionValues = () => {
        const value1 = Math.floor(Math.random() * 100);
        const value2 = Math.floor(Math.random() * 100);
        const value3 = Math.floor(Math.random() * 100);
        const proposedAnswer = Math.floor(Math.random() * 3) + value1 + value2 + value3;
        return [value1, value2, value3, proposedAnswer];
    }

    updateScore = event => {
        const questionValues = this.setQuestionValues();
        this.setState(curState => ({
            value1: questionValues[0],
            value2: questionValues[1],
            value3: questionValues[2],
            proposedAnswer: questionValues[3]
        }))

        const actualAnswer = questionValues[0] + questionValues[1] + questionValues[2];

        this.props.setScore((actualAnswer === questionValues[3]) === Boolean(event.target.name))
    }

    render() {
        return (
            <div>
                <div className="equation">
                    <p className="text">{`${this.state.value1} + ${this.state.value2} + ${this.state.value3} = ${this.state.proposedAnswer}`}</p>
                </div>
                <button name="true" onClick={this.updateScore}>True</button>
                <button name="false" onClick={this.updateScore}>False</button>
            </div>
        )
    }
}