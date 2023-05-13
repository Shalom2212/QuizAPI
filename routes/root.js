const express = require('express')
const router = express.Router()

//a root route for the endpoint

router.get(`^/$`,(req,res)=>{
    res.status(200).send('Quizzes-API')
})


module.exports = router;