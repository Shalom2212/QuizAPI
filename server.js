require('dotenv').config()
const express = require('express')
const app = express()
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const root = require('./routes/root')
const quizzes = require('./routes/quizzes')
const connectDB = require('./config/dbConnect')
const mongoose = require('mongoose')

const PORT = process.env.PORT || 5000

//endpoints
//POST/quizzes
//GET/quizzes/active
//GET/quizzes/:id/result
//GET/quizzes/all
connectDB() //to connect to database

app.use(express.json())

app.use(cookieParser())

app.use(bodyParser.urlencoded({extended:true}))

app.use(root)

app.use(quizzes)

//404 if non of the endpoints are found
app.all('*',(req,res)=>{
    res.status(404).send("404 NOT FOUND")
})

//connection to database
mongoose.connection.once('open',()=>{
    console.log('Connected to MongoDB')
    app.listen(PORT,()=>{
        console.log(`server running on port ${PORT}`)
    })    
})

//error if mongodb not connected
mongoose.connection.on('eroor',err => {
    console.log(err)
    logEvents(`${err.no}: ${err.code}\t${err.syscall}\t${err.hostname}`,'mongoErrLog.log')
})