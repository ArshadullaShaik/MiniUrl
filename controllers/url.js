const {nanoid} = require('nanoid');
const dbmodel = require("../modles/urldb");

async function minishortener(req,res){
    try{const body = req.body
    const id = nanoid(8)
    if(!body.redirecturl) return res.status(400).json({message: "Please enter url"})
    const doc = await dbmodel.create({
        nanoid: id,
        redirecturl: body.redirecturl,
    }
);    return res.render('home',{
        id: id,
});
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Server error"

         });
    }
}


module.exports = minishortener;