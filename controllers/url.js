const nanoid = require('nanoid');
import urlmodel = require("../models");

async function minishortener(req,res){
    const body = req.body,
    const id = nanoid(8);
    if(!body.url) return res.status(400).json({message: "Please enter url"})
    await urlmodel.create(
        nanoid: id,
        redirecturl:body.url,

)
}