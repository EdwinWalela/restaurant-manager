const express = require("express");
const mongoose = require("mongoose");

const menuRoutes = require("./routes/menu");

const PORT = process.env.PORT || 5000;
const DB_URI = "mongodb://admin:admin123@ds127535.mlab.com:27535/restaurantmanagment";

const app = express();

mongoose.connect(DB_URI,{useNewUrlParser:true});
mongoose.connection.once('open',()=>{
        console.log('connected to db')
    })
    .on('error',(err)=>{
        console.log('connection error\n',err)
    })

    
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use('/api/menu',menuRoutes);

app.get('/',(req,res)=>{
    res.json({
        data:'hello world'
    })
})

app.listen(PORT,()=>{
    console.log(`server listening for requests on port :${PORT}`);
})