import React, { Component } from 'react';
import Question from '../Question/Question';
import './QuestionContainer.css';

class QuestionContainer extends Component {
    state = {
        questionSet: ['question 1', 'question 2', 'question 3', 'question 4', 'question 5', 'question 6', 'question 7', 'question 8', 'question 9'],
        currentIndex: 0
    }

    next = () => {
        this.setState({ currentIndex: this.state.currentIndex + 1 })
    };
    previous = () => {
        this.setState({ currentIndex: this.state.currentIndex - 1 })
    };
    render() {
        return (
            <div className='questionContainer'>
                <button onClick={this.previous}>Prev</button>
                <Question question={this.state.questionSet[this.state.currentIndex]} />
                <button onClick={this.next}>Next</button>
            </div>

        )
    }
}

export default QuestionContainer;