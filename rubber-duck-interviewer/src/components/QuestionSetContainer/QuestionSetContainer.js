import React from 'react'
import './QuestionSetContainer.css'

const QuestionSetContainer = () => {
    const questionSetAll = {
        questionSet1: ['SET1-question 1', 'SET1-question 2', 'SET1-question 3', 'SET1-question 4', 'SET1-question 5', 'SET1-question 6', 'SET1-question 7', 'SET1-question 8', 'SET1-question 9'],
        questionSet2: ['SET2-question 2', 'SET2-question 2', 'SET2-question 3', 'SET2-question 4', 'SET2-question 5', 'SET2-question 6', 'SET2-question 7', 'SET2-question 8', 'SET2-question 9'],
        questionSet3: ['SET3-question 3', 'SET3-question 2', 'SET3-question 3', 'SET3-question 4', 'SET3-question 5', 'SET3-question 6', 'SET3-question 7', 'SET3-question 8', 'SET3-question 9'],
        questionSet4: ['SET4-question 4', 'SET4-question 2', 'SET4-question 3', 'SET4-question 4', 'SET4-question 5', 'SET4-question 6', 'SET4-question 7', 'SET4-question 8', 'SET4-question 9']
    }
    return (
        <div className='questionSetContainer'>
            {Object.keys(questionSetAll).map((key) => {
                return (
                    <div className='questionSet'><p>{key}</p></div>
                )
            })}
        </div>
    )
}

export default QuestionSetContainer;