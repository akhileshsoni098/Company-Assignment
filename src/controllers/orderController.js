

// Order created ->  status = GENERATED, information get saved into db.
// Order completed ->status = COMPLETED, where item quantity also get updated.

const orderModel = require('../models/order')

const ItemModel = require('../models/item')


//============================  post API ==========================================

const orderCreate = async function(res ,req) {

const data = req.body

const createOrder = await orderModel.create(data)

    res.status(201).send({status:"GENERATED" , msg:createOrder })

}


//============================  put API ==========================================

const orderUpdate = async function(req ,res){
    const data = req.body
    
    const updateOrder = await ItemModel.findOneAndUpdate({deleted:false},{
         $set: {productName:data.productName , quantity:data.quantity ,
             stockPrice:data.stockPrice , sellPrice:data.sellPrice ,updatedAt:Date.now() }}, {new:true})
    
        res.status(200).send({status:"COMPLETED" , msg:updateOrder })
    
    }
    

//============================  get API ==========================================

    const getOrder = async function (req, res){

        const orderId = req.params.orderId
    
        const orderDetails = await orderModel.find({_id:orderId, deleted:false}).populate(orderLineItemsId)
    
        res.status(200).send({status:true,msg:orderDetails})
    
    }
    
//====================================== delete API ==================================================

    const deleteOrder = async function(req, res){
    
        const orderId = req.params.orderId
    
    const del = await orderModel.findOneAndUpdate({_id:orderId, deleted:false},{$set:{deleted:true}} )
    
    res.status(200).send({status:"CANCELLED" , msg:"deleted Successfully"})
    
    }



    module.exports ={orderCreate,orderUpdate,deleteOrder,getOrder}