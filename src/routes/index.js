const express = require('express')
const router = express.Router()



const CouponsRoutes = require('./Coupon')
const userRoute = require('./User')

router.use('/coupons',CouponsRoutes)
router.use('/user',userRoute)

module.exports = router

