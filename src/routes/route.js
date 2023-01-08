const express = require('express');
const router = express.Router();

//========================= controller(logic module) required ===================================


const grnController = require('../controllers/grnContro')

const orderController =require('../controllers/orderController')

//=========================== Grn router ==========================================================

router.post("/createGrn", grnController.createGrn )

router.get("/getGrn/:grnId" , grnController.getGrn)

router.put("/updateItem/:grnId" , grnController.updateItem )

router.delete("/deleteGrn/:grnId" , grnController.deleteGrn)


// ===================================== Order router ================================================


const orderController =require('../controllers/orderController')

router.post("/orderCreate", orderController.orderCreate )

router.get("/getOrder/:orderId" , orderController.getOrder)

router.put("/orderUpdate/:orderId" , orderController.orderUpdate )

router.delete("/deleteOrder/:orderId" , orderController.deleteOrder)







module.exports = router;