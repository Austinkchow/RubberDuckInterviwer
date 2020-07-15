import React, { Component } from 'react';
import QuestionModel from '../../models/question';
import { withRouter } from 'react-router-dom'
import './QuestionTable.sass';

class QuestionTable extends Component {
    state = {
        addedQuestion: ''
    }

    handleSubmit = (event) => {
        event.preventDefault();

        QuestionModel.addQuestion(this.props.questionSet._id, { question: this.state.addedQuestion })
            .then(() => {
                this.props.fetchData()
                this.setState({
                    addedQuestion: ''
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
                    {this.props.questionSet.questions && this.props.questionSet.questions.map(question =>
                        <div>
                            <h6>{question}</h6>
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
