import React, { Component } from 'react';
import QuestionModel from '../../models/question';
import { withRouter } from 'react-router-dom'
import './QuestionTable.sass';

class QuestionTable extends Component {
    state = {
        questions: this.props.questionSet.questions,
        addedQuestion: '',
        deleteQuestionIndex: 0
    }

    handleSubmit = (event) => {
        event.preventDefault();

        QuestionModel.addQuestion(this.props.questionSet._id, { question: this.state.addedQuestion })
            .then(() => {
                const newQuestions = [...this.state.questions]
                newQuestions.push(this.state.addedQuestion)
                this.setState({
                    questions: newQuestions,
                    addedQuestion: ''
                })
            })
    }
    handleDelete = (index) => {
        QuestionModel.deleteQuestion(this.props.questionSet._id, { index })
            .then(() => {
                const newQuestions = [...this.state.questions]
                newQuestions.splice(index, 1)
                this.setState({
                    questions: newQuestions
                })
            })
    }

    handleChange = (event) => {
        this.setState({
            addedQuestion: event.target.value
        })
    }

    render() {
        console.log(this.props)
        return (
            < div >
                <div className="QuestionSetCard">
                    <h3>{this.props.questionSet.name}</h3>
                    {this.state.questions && this.state.questions.map((question, index) =>
                        <div>
                            <h6>{question}</h6>
                            <button onClick={() => this.handleDelete(index)}>Delete</button>
                        </div>
                    )}
                </div>
                <div className="QuestionAdd">
                    <form onSubmit={this.handleSubmit}>
                        <label htmlFor="question">Add Question</label>
                        <input
                            type="text"
                            name="question"
                            onChange={this.handleChange}
                            value={this.state.addedQuestion} />
                        <input type="submit" value="Save!" />
                    </form>
                </div>
            </div >
        );
    }
}


export default withRouter(QuestionTable);
