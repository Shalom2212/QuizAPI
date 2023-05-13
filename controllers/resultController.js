const Quiz = require('../models/Quiz')
const asyncHandler = require('express-async-handler')

const resQuiz = asyncHandler(async(req,res)=>{
    const id = req.params.id;
    const resquiz = await Quiz.findById(id);

    //use to check if given id is present or not
    if(resquiz.length<0){
        return res.status(400).json({message: 'Invalid ID'})
    }

    const now = new Date(); 

    end = resquiz.endDate;

    //use to check if quiz if finsihed or not
    if(now<=end){
        return res.status(400).json({message:'requested quiz is not yet finished'})
    }

    const op = resquiz.rightAnswer //get index of right answer

    const answer = resquiz.options[op] //store the right answer

    jsonquiz = {_id:id,rightAnswer:answer} //json object with id and answer

    return res.status(200).json(jsonquiz)

})


module.exports = resQuiz