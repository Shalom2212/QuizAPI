const Quiz = require('../models/Quiz')
const asyncHandler = require('express-async-handler')

const createQuiz = asyncHandler( async(req,res)=>{

    //to check all the feilds are present 
    const{question,options,rightAnswer,startDate,endDate} = req.body
    if(!question || !options || !startDate || !endDate  ){
        return res.status(400).json({message:'All fields are required'})
    }
    //to check if the rightanswer with in index value
    if(rightAnswer < 0){
        return res.status(400).json({message:'All fields are required'})
    }
    const sd = new Date(startDate)
    const ed = new Date(endDate)
    ed.setTime(ed.getTime() + (5 * 60 * 1000)); //5 MINUTES added extra as per rule

    const quizObject = {question,options,rightAnswer,"startDate":sd,"endDate":ed} //create quiz object

    const Quizzes = await Quiz.create(quizObject)

    if(Quizzes){
        res.status(201).json({message:"Quiz created"})
    }else{
        res.status(400).json({message:"Invlaid information"})
    }
})


module.exports = createQuiz