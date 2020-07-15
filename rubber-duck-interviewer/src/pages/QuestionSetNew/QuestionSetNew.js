import React, { Component } from 'react'
import QuestionModel from '../../models/question';

class NewQuestionSet extends Component {
    state = {
        name: ''
    }

    handleSubmit = (event) => {
        event.preventDefault();
        QuestionModel.create(this.state)
            .then(() => {
                this.props.history.push('/questionsets')
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
                    <input type="submit" value="Add" />
                </form>
            </div>
        )
    }
}

export default NewQuestionSet;