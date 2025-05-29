import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
const app = express()
dotenv.config()
app.use(express.json())
app.use(cors({
    origin:process.env.CLIENT_URL,
    credentials:true
}))




export default app