import React, { Component } from 'react'
import QuestionModel from '../../models/question';

class updateQuestionSet extends Component {
    state = {
        name: '',
        currentQuestionSet: this.props.match.params.id
    }

    handleSubmit = (event) => {
        event.preventDefault();
        QuestionModel.update(this.state.currentQuestionSet, { name: this.state.name })
            .then((res) => {
                console.log(res)
                this.props.history.push(`/questionSets/${this.state.currentQuestionSet}`)
            })
    }

    handleChange = (event) => {
        this.setState({
            name: event.target.value
        })
    }
    render() {
        return (
            <div>
                <h2>New Interview Question Set</h2>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            name="name"
                            onChange={this.handleChange}
                            value={this.state.name}
                        />
                    </div>
                    <input type="submit" value="Change" />
                </form>
            </div>
        )
    }
}

export default updateQuestionSet;