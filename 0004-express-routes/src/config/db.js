const mongoose = require('mongoose')
const { log } = require('../utils/logger')

const connectDB = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_DB_URL)
        log(`MongoDb connected`)
    } catch (error) {
        log(`MongoDB connection error: ${error}`)
        process.exit(1)
    }
}

module.exports = {connectDB}