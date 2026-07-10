const express = require("express");
const { handleUserSignup, handleUserLogin } = require("../controllers/user");

const router = express.Router();

router.post("/signup", handleUserSignup);
router.post("/login", handleUserLogin);
router.get('/login', (req, res) =>
	res.render("login")
)

router.get('/signup', (req, res) =>
	res.render("signup")
)
module.exports = router;