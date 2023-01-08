
const mongoose = require('mongoose')

// 5.  Item
// { id,createdAt, updatedAt,deleted, productName(unique), quantity, stockPrice, sellPrice }

const itemSchema = new mongoose.Schema({

productName:{
    type:String,
    unique:true,
    required:true
},
quantity:{
    type:Number,
    requred:true

},
sellPrice:String,

stockPrice:String,

deleted:{
type:Boolean,
default:false

}


})

module.exports= mongoose.model('Item', itemSchema)