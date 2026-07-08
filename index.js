const router = require("./routes/url")
const connectmongo = require('./connection/connection')

connectmongo("mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.9.2");