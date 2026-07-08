const mongoose = require('mongoose')

function connectmongo(url){
    return mongoose.connect(url);
}

exports.modules = {
    connectmongo
}