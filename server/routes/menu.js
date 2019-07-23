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

router.get('/:id',async(req,res)=>{
    let itemId = req.params.id;
    let menuItem;

    try{
        menuItem = await MenuItems.findById(itemId);
    }
    catch(err){
        res.status(500).send({
            error:err.message
        });
        return;
    }

    res.json({
        menuItem
    })
})

module.exports = router;