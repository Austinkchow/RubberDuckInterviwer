const mongoose = require('mongoose');

const questionSetSchema = new mongoose.Schema({
    questions: [{
        type: String
    }],
    sharePermission: {
        type: Boolean,
        required: true
    }
})

const QuestionSet = mongoose.model("QuestionSet", questionSetSchema);


module.exports = QuestionSet;