import mongoose from "mongoose";

const connectDB = async()=>{
    try {
        console.log("${process.env.MONGO_DB_URI}/${process.env.APP_NAME}>>>>",`${process.env.MONGO_DB_URI}/${process.env.APP_NAME}`)
        await mongoose.connect(`${process.env.MONGO_DB_URI}/${process.env.APP_NAME}`)
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

export default connectDB