const mongoose = require('mongoose')

const connectDB = async ()=>{
    try{
        /*DATABASE_URI = mongodb+srv://shalomdevop22:shalomshalom@cluster0.35e70cr.mongodb.net/?retryWrites=true&w=majority */
        await mongoose.connect(process.env.DATABASE_URI) //DATABASE_URI in env file 
    } catch (e){
        console.log(e)
    }
}


module.exports = connectDB