const router = require("./routes/url");
const Static = require("./routes/Staticurl");
const path = require('path');
const cookieParser = require('cookie-parser');
const { restrictToLoggedinUserOnly, checkAuth } = require("./middlewares/auth");
const {connectmongo} = require('./connection/connection');
const PORT = 5500;
const app = require('express')();
const userRoute = require("./routes/user");

app.use(cookieParser());
app.set("views", path.resolve("./views"));
connectmongo("mongodb://127.0.0.1:27017/urldb");
app.set("view engine", "ejs");
app.use(require("express").urlencoded({ extended: false }));
app.use(require("express").json());
app.use("/url", restrictToLoggedinUserOnly, router);
app.use("/user", userRoute);
app.use("/",checkAuth, Static);
console.log(connectmongo)

app.listen(PORT,()=>console.log("Server started broo"));