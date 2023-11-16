const express = require('express')
const CouponsController = require('../controller/Coupon') 

const router = express.Router();

router.get("/",CouponsController.getAllCoupons)
router.get("/:id",CouponsController.getCouponsByid)
router.post("/",CouponsController.createCoupons)
router.put("/:id",CouponsController.editCoupons)
router.delete("/:id",CouponsController.deleteCoupons)


module.exports = router