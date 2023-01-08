const mongoose = require('mongoose')
/*
3.  order
{id,createdAt, updatedAt,deleted,status(GENERATED, COMPLETED,CANCELLED), 
    invoiceNumber, customerName, customerFullAddress, orderLineItems: orderLIneItem[], date}
*/
// const mixed = mongoose.Schema.Type.Mixed

const objectId = mongoose.Schema.Type.objectId
const orderSchema = new mongoose.Schema({
  
   invoiceNumber:{
      type:String,
      required:true
  },
  customerName:{
   type:String,
   required:true
  },
  customerFullAddress:{
   city:{
       type:String,
       required:true,
       lowercase:true
   },
   state:{
       type:String,
       required:true,
       lowercase:true
   },
   
   pincode:{
      type:Number,
      required:true
  },
},
orderLineItemsId:{
   type:objectId,
   ref:"orderLineItem"
},
date:String,

updatedAt:date,
deleted:{
type:Boolean,
default:false
}
},
  { timestamps:true
}
)

module.exports= mongoose.model('order', orderSchema)