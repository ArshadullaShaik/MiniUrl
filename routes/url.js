const express = require('express');
const router = express.Router();
const minishortener = require('../controllers/url')
const dbmodel = require('../modles/urldb');
const { nanoid } = require('nanoid');
router.post('/',async(req,res)=>{
        return minishortener(req,res)


})

router.get('/',async(req,res)=>{
        return res.status(200).json({
                message: "its working le"
        })


})

router.get('/:nanoid',async(req,res)=>{
        const doc = await dbmodel.findOne({ nanoid: req.params.nanoid });

  if (!doc) {
    return res.status(404).json({ message: {nanoid} });
  }

  return res.redirect(doc.redirecturl);
});

module.exports = router