const db = require('../models')

const index = (req, res) => {
    db.QuestionSet.find({}, (err, allQuestionSets) => {
        if (err) console.log('Error in questionSets#index:', err)
        if (!allQuestionSets.length) {
            return res.status(200).json({ message: 'No questionSet found in database' });
        }
        res.status(200).json({ questionSet: allQuestionSets });
    })
}

const show = (req, res) => {
    db.QuestionSet.findById(req.params.id, (err, foundQuestionSet) => {
        if (err) console.log('Error in questionSets#show:', err)
        if (!foundQuestionSet) return res.json({ message: 'no question set with ID found' });
        res.status(200).json({ questionSet: foundQuestionSet });
    })
}

const create = (req, res) => {
    db.QuestionSet.create({ ...req.body }, (err, saveQuestionSet) => {
        if (err) console.log('Error in questionSet#create:', err)
        res.status(201).json({ questionSet: saveQuestionSet });
    })
}

const addQuestion = (req, res) => {
    db.QuestionSet.findById(req.params.id, (err, foundQuestionSet) => {
        if (err) console.log('Error in questionSets#show:', err)
        if (!foundQuestionSet) return res.json({ message: 'no question set with ID found' });
        foundQuestionSet.questions.push(req.body.question);
        foundQuestionSet.save()
        res.status(200).json({ message: "Question added" })
    })
}


const update = (req, res) => {
    db.QuestionSet.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedQuestionSet) => {
        if (err) console.log('Error in questionSet#update:', err)
        if (!updatedQuestionSet) return res.json({ message: 'no question set with ID found' });
        res.status(200).json({ questionSet: updatedQuestionSet });
    })
}

const destroy = (req, res) => {
    db.QuestionSet.findByIdAndDelete(req.params.id, (err, deletedQuestionSet) => {
        if (err) console.log('Error in questionSets#destroy:', err)
        if (!deletedQuestionSet) return res.json({ message: 'no question set with ID found' });
        res.status(200).json({ game: deletedQuestionSet })
    })
}

module.exports = {
    index,
    show,
    create,
    addQuestion,
    update,
    destroy
}