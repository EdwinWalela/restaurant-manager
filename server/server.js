const express = require("express");
const PORT = process.env.PORT || 5000;

const app = express();

app.get('/',async (req,res)=>{
    res.json({
        data:'hello world'
    })
})

app.listen(PORT,()=>{
    console.log(`server listening for requests on port:${PORT}`);
})