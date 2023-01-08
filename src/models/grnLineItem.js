const mongoose = require('mongoose')
/*
2.  grnLineItem
 {id,createdAt, updatedAt,deleted,  productName, quantity, stockPrice }
*/
const grnLineItemSchema = new mongoose.Schema( [{

    productName:{
        type:String,
        required: true
    },
    
    quantity: {
    type:Number,
    required:true
    },
    
    stockPrice:{
        type:Number,
        required:true
    },

    updatedAt:Date

}],  

{
    timestams:true

})
module.exports= mongoose.model('grnLineItem', grnLineItemSchema)