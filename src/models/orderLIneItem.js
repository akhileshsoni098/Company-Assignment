const mongoose = require('mongoose')

// orderLIneItem
// {id,createdAt, updatedAt,deleted,  productName, quantity, sellPrice }

const orderLIneItemSchema = new mongoose.Schema({

    productName:{
        type:String,
        required:true
    },

    quantity: { 
        type:Number,
        required:true
    },

    sellPrice:{
    type:String,
    required:true
    }
},

{ timestamd:true}

)

module.exports = mongoose.Model('orderLIneItem', orderLIneItemSchema)