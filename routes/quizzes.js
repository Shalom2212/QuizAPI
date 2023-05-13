const express = require('express')
const createQuiz = require('../controllers/createQuizController')
const allQuiz = require('../controllers/allQuizController')
const activeQuiz = require('../controllers/activeQuizController')
const resQuiz = require('../controllers/resultController')
const router = express.Router()

router.route('/quizzes')
    .post(createQuiz)

router.get('/quizzes/all',allQuiz)
router.get('/quizzes/active',activeQuiz)
router.get('/quizzes/:id/result',resQuiz)

module.exports = router;