const mongoose = require('mongoose')

function connectmongo(url){
    return mongoose.connect(url)
    .then(()=>console.log("db connected bro"))
    .catch((err)=>console.log(err));
}
exports.modules = {
    connectmongo
}