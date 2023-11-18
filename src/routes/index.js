import express from 'express'
import CouponsRoutes from './Coupon.js'
import userRoute from './User.js'
const router = express.Router()

router.use('/coupons',CouponsRoutes)
router.use('/user',userRoute)

export default router
