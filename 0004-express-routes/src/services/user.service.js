const User = require('../models/user.model');
const { Log } = require('../utils/logger');


const getAllUsers = async()=>{
    Log('call getAllUsers')
    return await User.find();
}

const addUser  = async(data)=>{
    try {
        const user = User(data)
        Log('call addUser')
        return await user.save(user)
    } catch (error) {
        Log(error)
        process.exit(1)
    }
}

const deleteUserById = async(id)=>{
    try {
        Log('call deleteUserById',id)
        return await User.findByIdAndDelete(id)
        
    } catch (error) {
        Log(error)
        process.exit(1)
    }
}

module.exports = {getAllUsers, addUser, deleteUserById}