const mongoose = require('mongoose')
const { Log } = require('../utils/logger')

const connectDB = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_DB_URL)
        Log(`MongoDb connected`)
    } catch (error) {
        Log(`MongoDB connection error: ${error}`)
        process.exit(1)
    }
}

module.exports = {connectDB}