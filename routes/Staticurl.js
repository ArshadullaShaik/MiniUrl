const express = require('express');
const router = express.Router();
const urldb = require('../modles/urldb')

router.get("/", async (req, res) => {
  if (!req.user) return res.redirect("/login");
  const allurls = await urldb.find({ createdBy: req.user._id });
  return res.render("home", {
    urls: allurls,
  });
});


router.get('/login', (req, res) =>
	res.render("login")
)

router.get('/signup', (req, res) =>
	res.render("signup")
)

module.exports = router