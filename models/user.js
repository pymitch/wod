const mongoose = require('mongoose')
var userSchema = new Schema({
    user: {
        type: String, 
        required: true
    },
    bins:{
        bin1:[],
        bin2:[],
        bin3:[],
        bin4:[],
        bin5:[]
    },  
    lastLogin: Date,
    password: {
        type: String,
        required: true
    }
})
const User = module.exports = mongoose.model('User', UserSchema)