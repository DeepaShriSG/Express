import express from 'express'
import CouponsController from '../controller/Coupon.js'

const router = express.Router();

router.get("/",CouponsController.getAllCoupons)
router.get("/:id",CouponsController.getCouponsByid)
router.post("/",CouponsController.createCoupons)
router.put("/:id",CouponsController.editCoupons)
router.delete("/:id",CouponsController.deleteCoupons)


export default router