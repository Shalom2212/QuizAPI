const mongoose = require('mongoose')

const quizSchema = new mongoose.Schema({
    question:{
        type:String,
        require:true
    },
    options:{
        type:[String],
        require:true
    },
    rightAnswer:{
        type:Number,
        require:true
    },
    startDate:{
        type:Date,
        require:true
    },
    endDate:{
        type:Date,
        require:true
    }
})


module.exports = mongoose.model('Quiz',quizSchema)