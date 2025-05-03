const express = require('express');
const app = express();
const PORT = 3000;
const Users = require('./database/users')

app.get('/',(req, res)=>{
    res.send("this is default route")
    })

app.get('/users',(req, res)=>{
    res.json(Users.Users)
})

app.get('/user/:userId',(req, res)=>{
    const {userId} = req.params;
    res.json(Users.Users.filter(user=>user.id==userId))
})




app.listen(PORT,()=>{
    console.log(`server is running at PORT no. ${PORT}`)
})