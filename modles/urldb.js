const mongoose = require('mongoose')


const urlschema = new mongoose.Schema({
    nanoid: {
            required: true,
            unique: true,
            type: String,
            },
            
            redirecturl: {
                type: String,
                required: true,
            },
            visithistory:[{Timestamp:{type:Date},},],
        },{timestamps: true}
        )