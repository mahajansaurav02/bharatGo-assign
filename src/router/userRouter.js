const express=require('express')
const router=express.Router()
const userController=require("../controllers/userController")
const {auth}=require("../Middleware/auth")

router.post('/auth/register',userController.registerUser)
router.post('/auth/login',userController.loginUser)
router.get('/users',userController.getUsers)
router.get('/users',userController.getUsers)


module.exports=router