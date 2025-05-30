import app from "./app.js";
import connectDB from "./config/db.js";

const PORT = process.env.PORT || 500


const startServer = async()=>{
    try {
        await connectDB()
        app.listen(PORT,()=>{
            console.log(`server is running at PORT ${PORT}`)
        })
    } catch (error) {
        console.log(error)
    }
}

startServer()