const express=require("express");
const router=express.Router();

const orderController=require("../controllers/adminOrdercontroller");
const authenticate = require("../middleware/authenticate");
router.get("/",authenticate,orderController.getAllOrders);
router.put("/:orderId/confirmed",authenticate,orderController.confirmedOrders);
router.put("/:orderId/ship",authenticate,orderController.shippOrders);
router.put("/:orderId/deliver",authenticate,orderController.deliverOrders);
router.put("/:orderId/cancle",authenticate,orderController.cancleOrders);
router.put("/:orderId/delete",authenticate,orderController.deleteOrders);



module.exports=router;