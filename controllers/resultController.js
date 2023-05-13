const Quiz = require('../models/Quiz')
const asyncHandler = require('express-async-handler')

const resQuiz = asyncHandler(async(req,res)=>{
    const id = req.params.id;
    const resquiz = await Quiz.findById(id);


    if(resquiz.length<0){
        return res.status(400).json({message: 'Invalid ID'})
    }

    const now = new Date();

    end = resquiz.endDate;

    if(now<=end){
        return res.status(400).json({message:'requested quiz is not yet finished'})
    }

    const op = resquiz.rightAnswer

    const answer = resquiz.options[op]

    jsonquiz = {_id:id,rightAnswer:answer}

    return res.status(200).json(jsonquiz)

})


module.exports = resQuiz