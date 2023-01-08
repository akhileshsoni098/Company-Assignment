
// GRN created -> status = GENERATED, information get saved into db.
// GRN completed -> status = COMPLETED, where item quantity also get updated.
// // 
// /grn (post, get, put ,delete)
// /grn/update-status ( post ) body { status: “COMPLETED” }, or { status: “CANCELLED” }
// // 

const grnModel = require('../models/grn')

const grnItem = require('../models/item')


//============================  post API ==========================================

const createGrn = async function(req ,res){

const grnData =req.body

const saveGrn = await grnModel.create(grnData)

res.status(201).send({status:"GENERATED" , msg:saveGrn})

}


//============================  put API ==========================================


const updateItem = async function(req , res) {

 const data = req.body

const updateItems = await grnItem.findOneAndUpdate({deleted:false},{ $set:{quantity:data.quantity,

productName:data.productName, sellPrice:data.sellPrice , stockPrice:data.stockPrice, updatedAt:Date.now() } },
 {new:true})

res.status(200).send({status:"COMPLETED" , msg:updateItems})

}

// ======================================= get API ===================================

const getGrn = async function (req, res){

    const grnId = req.params.grnId

    const grnDetails = await grnModel.find({_id:grnId, deleted:false}).populate(grnLineItemsId)

    res.status(200).send({status:true,msg:grnDetails})

}

//============================  delete API ==========================================


const deleteGrn = async function(req, res){

    const grnId = req.params.grnId

const del = await grnModel.findOneAndUpdate({_id:grnId, deleted:false},{$set:{deleted:true}} )

res.status(200).send({status:"CANCELLED" , msg:"deleted Successfully"})

}

module.exports ={createGrn,updateItem, getGrn, deleteGrn }