const {getAllUsers, addUser, deleteUserById} = require('../services/user.service');
const { Log } = require('../utils/logger');


const getUsers = async(req, res, next)=>{
    try {
        const users = await getAllUsers()
        res.json(users)
    } catch (error) {
        Log(error)
        next(error)
    }
}

const createUser = async(req, res, next)=>{
    try {
        Log('call createUser controller')
        const {user} = req.body
        const users = await addUser(user)
        res.status(201).json(users)
    } catch (error) {
        Log(error)
        next(error)
    }
}

const deleteUser = async(req, res, next)=>{
    try {
        const {userId} = req.params
        Log('call deleteUser controller',userId)
        const deletedUser = await deleteUserById(userId)
        res.json(deletedUser)
        
    } catch (error) {
        Log(error)
        next(error)
    }
}

module.exports = {getUsers, createUser, deleteUser}