const express = require('express');
const router = express.Router();
const minishortener = require('../controllers/url')

router.post('/',async(req,res)=>{
        return minishortener(req,res)


})

router.get('/',async(req,res)=>{
        return res.status(200).json({
                message: "its working le"
        })


})

module.exports = router