const mongoose = require('mongoose')
var passportLocalMongoose = require('passport-local-mongoose')
var userSchema = new mongoose.Schema({
    username: {
        type: String, 
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

userSchema.plugin(passportLocalMongoose)

const User = module.exports = mongoose.model('User', userSchema)

    // bins:{
    //     bin1:[],
    //     bin2:[],
    //     bin3:[],
    //     bin4:[],
    //     bin5:[]
    // },  
    // lastLogin: Date,