const express = require('express');
const router = express.Router();
const minishortener = require('../controllers/url')

router.post('/',async(req,res)=>{
        minishortener(req,res)


})