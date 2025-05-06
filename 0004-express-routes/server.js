const app = require('./src/app')
const {connectDB} = require('./src/config/db')
const {log} = require('./src/utils/logger')
const dotenv = require('dotenv')
dotenv.config()

const PORT = process.env.PORT || 5000

connectDB().then(()=>{
    app.listen(PORT,()=>log(`Server running on port ${PORT}`))
})
