const app = require('./src/app')
const {connectDB} = require('./src/config/db')
const {Log} = require('./src/utils/logger')
const dotenv = require('dotenv')
dotenv.config()

const PORT = process.env.PORT || 5000

connectDB().then(()=>{
    app.listen(PORT,()=>Log(`Server running on port ${PORT}`))
})
