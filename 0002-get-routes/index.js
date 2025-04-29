const express = require('express');
const app = express();

const PORT = 3000;

app.get('/',(req, res)=>{
res.send("this id default route")
})

app.get('/getAllUsers',(req, res)=>{
    res.send("this is getAllUsers Route")
})


app.listen(PORT,()=>{
    console.log("this node js server!!!!")
})


