const router = require("./routes/url")
const Static = require("./routes/Staticurl")

const {connectmongo} = require('./connection/connection')
const PORT = 5500
const app = require('express')()


connectmongo("mongodb://127.0.0.1:27017/urldb");
app.set("view engine", "ejs");
app.use(require("express").urlencoded({ extended: false }));
app.use(require("express").json());
app.use("/url", router);
app.use("/", Static);
console.log(connectmongo)

app.listen(PORT,()=>console.log("Server started broo"));