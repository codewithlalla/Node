import app from "./app";
import ConnectDb from "./config/db";


const startServer = async()=>{
    try {
       await ConnectDb();
       app.listen(process.env.PORT)
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

startServer()