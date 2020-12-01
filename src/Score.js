import React from 'react';

export default function Score(props) {
    return (
        <p className="text">
            Your Score: {props.numCorrect}/{props.numQuestions}
        </p>
    )
}