import React, { Component } from 'react';
import './Question.css'
class Question extends Component {
    render() {
        return (
            <h5>{this.props.question}</h5>
        );
    }
}

export default Question;