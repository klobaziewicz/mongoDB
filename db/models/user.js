const mongoose = require('mongoose')

//model
//const User = mongoose.model('User',{
//    name: {
//        type: String
//    },
//    age: {
//        type: Number
//    }
//})

//Schema
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        validate(value){
            if(value==='Steve')
                throw new Error('This is my name')
        },
        unique: true,
        lowercase: true
    },
    age: {
        type: Number,
        default: 19,
        min: 18
    }
})

const User = mongoose.model('User', userSchema)

module.exports = User