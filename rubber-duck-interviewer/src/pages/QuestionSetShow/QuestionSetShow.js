import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import QuestionModel from '../../models/question';
import QuestionTable from '../../components/QuestionTable/QuestionTable';

class QuestionSetShow extends Component {
    state = {
        questionSet: {},
        currentQuestionSet: this.props.match.params.id
    }

    componentDidMount() {
        this.fetchData()
    }

    fetchData = () => {
        QuestionModel.show(this.state.currentQuestionSet).then(data => {
            this.setState({ questionSet: data.questionSet })
            console.log(this.state.questionSet)
        })
    }
    render() {
        return (
            <div>
                <div>
                    <h2>{this.state.questionSet.name}</h2>
                </div>
                <div>
                    <Link to={`/questionSets/${this.state.currentQuestionSet}/edit`}>Question Set Edit</Link>
                    <Link to={`/questionSets/${this.state.currentQuestionSet}/delete`}>Question Set Delete</Link>
                </div>
                < div >
                    <QuestionTable questionSet={this.state.questionSet} fetchData={this.fetchData} />
                </div >
            </div>
        )
    }
}
export default QuestionSetShow