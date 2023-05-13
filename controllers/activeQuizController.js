const Quiz = require('../models/Quiz')
const asyncHandler = require('express-async-handler')

const activeQuiz = asyncHandler(async(req,res)=>{

    const currentDate = new Date();

    const query = {
        startDate: { $lte: currentDate },
        endDate: { $gte: currentDate }
      };

      const activequiz = await Quiz.find(query).lean();

      if(!activequiz?.length){
        return res.status(400).json({message: 'No active quiz'})
    }

    const totalquiz = activequiz;

    const squiz = totalquiz.map(item=>{
      return {
          ...item,
          "status":"active"
      };
  })

    res.status(200).json(squiz)
})

module.exports = activeQuiz;