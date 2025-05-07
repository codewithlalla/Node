const {Schema, model} = require('mongoose')

const userSchema = Schema({
    name:{type:String, required:true, maxlength:30},
    email:{
        type:String, 
        required:[true,'email is required'],
        unique: true,
        lowercase: true,
        trim: true,
        match: [
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        'Please enter a valid email address',
    ],
    profileUrl:{
        type:String,
        trim: true,
    },
    phoneNo:{
        type:Number,
        trim: true,
        maxlength:10,
        minlength:10,
    },
    isActive:{
        type:Boolean,
        default:false
    }
    }
}, {
    timestemp:true
})


const User = model('User',userSchema);

module.exports = User;