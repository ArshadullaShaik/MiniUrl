const router = require("./routes/url")
const {connectmongo} = require('./connection/connection')
const PORT = 5500
const app = require('express')()

connectmongo("mongodb://127.0.0.1:27017/urldb");
app.use("/url", router);
console.log(connectmongo)

app.listen(PORT,()=>console.log("Server started broo"));