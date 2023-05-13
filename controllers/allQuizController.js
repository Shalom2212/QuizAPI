const Quiz = require('../models/Quiz')
const asyncHandler = require('express-async-handler')

const allQuiz = asyncHandler(async(req,res)=>{
    const quiz = await Quiz.find().lean();

    if(!quiz?.length){
        return res.status(400).json({message: 'No content found'})
    }

    const totalquiz = quiz;

    //logic to add current status field to the json object
    const squiz = totalquiz.map(item=>{
        const now = new Date()
        const start = new Date(item.startDate);
        const end = new Date(item.endDate);
      
        let status;
      
        if (now < start) {
          status = 'inactive';
        } else if (now >= start && now <= end) {
          status = 'active';
        } else {
          status = 'finished';
        }

        return {
            ...item,
            status
        };
    })

    res.status(200).json(squiz)
})

module.exports = allQuiz;