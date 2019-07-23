const router = require("express").Router();
const MenuItems = require("../models/menuItem");

router.get('/',async(req,res)=>{
    let menuItems=[];
    try{ 
       menuItems = await MenuItems.find({});
    }catch(err){
        res.status(500).send({
            error:err.message
        });
        return;
    }
    
    res.json({
        count:menuItems.length,
        menuItems
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

router.post('/',async(req,res)=>{
    console.log(req.body)
    let body = req.body;

    // Assume body is empty if first attribute is not pressent
    if(!body.type){
        res.status(300).send({
            error:"empty body"
        });
        return;
    }

    let newItem = {
        type:body.type,
        name:body.name,
        ingredients:body.indgredients,
        price:Number(body.price)
    }

    try{
        await new MenuItems(newItem).save();
    }
    catch(err){
        res.status(500).send({
            error:err.message
        });
        return;
    }

    res.json({
        msg:'new item created'
    })

})

router.put('/:id',async(req,res)=>{
    let itemId = req.params.id;
    let updatedItem = req.body;

    if(!itemId){
        res.status(300).send({
            error:'id missing'
        })
        return;
    }
    if(!updatedItem.type){
        res.status(300).send({
            error:'body missing'
        })
        return;
    }
    try {
        await MenuItems.findByIdAndUpdate(itemId,{
            type:updatedItem.type,
            name:updatedItem.name,
            price:updatedItem.price,
        })
    } catch (err) {
        res.status(500).send({
            error:err.message
        })
        return;
    }

    res.json({
        msg:'item updated'
    })
})

module.exports = router;