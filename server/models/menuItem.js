const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MenuITemSchema = new Schema({
    type:String,
    name:String,
    ingredients:String,
    price:Number
})

const MenuItem = mongoose.model('menuitems',MenuITemSchema);

module.exports = MenuItem;