import app from "./app.js";
import connectDb from "./config/db.js";
const PORT = process.env.PORT || 5000

const startServer=async()=>{
    try {
        await connectDb()
        app.listen(PORT,()=>{
            console.log(`server is running at PORT ${PORT}`)
        })
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

startServer()