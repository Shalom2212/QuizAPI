const express = require('express')
const createQuiz = require('../controllers/createQuizController')
const allQuiz = require('../controllers/allQuizController')
const activeQuiz = require('../controllers/activeQuizController')
const resQuiz = require('../controllers/resultController')
const router = express.Router()

router.route('/quizzes')
    .post(createQuiz) //endpoint to create quiz

router.get('/quizzes/all',allQuiz) //endpoint to get all the quiz question
router.get('/quizzes/active',activeQuiz) //endpoint to get all the active quiz
router.get('/quizzes/:id/result',resQuiz) //endpoint to get result by id params

module.exports = router;