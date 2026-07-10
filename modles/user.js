const mongoose = require('mongoose')


const userschema = new mongoose.Schema(
    {
        name:{
            require: true,
            type: String
        },
        email:{
            require: true,
            type: String
        },
        password:{
            require: true,
            type: String
        }
    }


)

const User = mongoose.model("user",userschema);

module.exports = User;