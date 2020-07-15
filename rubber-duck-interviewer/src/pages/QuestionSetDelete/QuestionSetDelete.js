import React, { Component } from 'react'
import QuestionModel from '../../models/question';

class updateQuestionSet extends Component {
    state = {
        currentQuestionSet: this.props.match.params.id
    }

    handleSubmit = (event) => {
        event.preventDefault();
        QuestionModel.delete(this.state.currentQuestionSet)
            .then(() => {
                this.props.history.push('/questionSets')
            })
    }

    render() {
        return (
            <div>
                <h2>Are you sure you want to delete ?</h2>
                <form onSubmit={this.handleSubmit}>
                    <input type="submit" value="Yes" />
                </form>
            </div>
        )
    }
}

export default updateQuestionSet;