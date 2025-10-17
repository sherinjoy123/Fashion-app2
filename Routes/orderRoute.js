import express from 'express'
import { placeOrder,placeOrderRazorpay,placeOrderStrip,allOrders,userOrders,updateStatus, verifyStripe } from '../controllers/orderController.js'
import adminAuth from '../Middleware/adminAuth.js'
import authUser from '../Middleware/auth.js'

const orderRouter = express.Router()

//Admin Features
orderRouter.post('/list',adminAuth,allOrders)
orderRouter.post('/status',adminAuth,updateStatus)

//Payment Features
orderRouter.post('/place',authUser,placeOrder)
orderRouter.post('/stripe',authUser,placeOrderStrip)
orderRouter.post('/razorpay',authUser,placeOrderRazorpay)

//UserFeature
orderRouter.post('/userorders',authUser,userOrders)
//veridy payment

orderRouter.post('/verifyStripe',authUser,verifyStripe)

export default orderRouter