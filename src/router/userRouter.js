const express=require('express')
const router=express.Router()
const userController=require("../controllers/userController")
const {auth}=require("../Middleware/auth")

router.post('/auth/register',userController.registerUser)
router.post('/auth/login',userController.loginUser)
router.get('/users',userController.getUsers)

router.get('/users/:id',userController.getUserById)
router.put('/users/:id',userController.updateUserById)
router.delete('/users/:id',userController.deleteUser)



module.exports=router
