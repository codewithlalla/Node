const express = require('express');
const app = express();

const PORT = 3000;

app.get('/',(req, res)=>{
res.send("this id default route")
})

app.get('/getAllUsers',(req, res)=>{
    res.send("this is getAllUsers Route")
})

app.get('/ab?cd',(req, res)=>{
    res.send
    ("run on abd && abcd")
})

app.get('/ab+cd',(req, res)=>{
    res.send
    ("run on ab && abcd &&abbcd etc")
})


app.listen(PORT,()=>{
    console.log("this node js server!!!!")
})


