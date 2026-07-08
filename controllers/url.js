const nanoid = require('nanoid');
const urlmodel = require("../models");

async function minishortener(req,res){
    try{const body = req.body
    const id = nanoid(8)
    if(!body.url) return res.status(400).json({message: "Please enter url"})
    const doc = await urlmodel.create({
        nanoid: id,
        redirecturl: body.url,
    }
);    return res.status(201).json(doc);
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Server error" });
    }
}


module.exports = minishortener;