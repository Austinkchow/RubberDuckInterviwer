import React from 'react';
import './QuestionSetCard.sass'

const QuestionSetCard = (props) => {
    return (
        <div className="questionSetCard">
            <h3>{props.questionSet.name}</h3>
            <h4>Terms:</h4>
            <h4>{props.questionSet.questions.length}</h4>
        </div>
    );
}

export default QuestionSetCard;