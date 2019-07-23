const router = require("express").Router();
const MenuItems = require("../models/menuItem");

router.get('/',async(req,res,next)=>{
    let menuItems=[];
    let error;

    try{ 
       menuItems = await MenuItems.find({});
    }catch(err){
        res.status(500).send({
            error:err.message
        });
        return;
    }
    
    res.json({
        menuItems,
        count:menuItems.length
    })
})

module.exports = router;