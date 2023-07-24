const express=require("express")
const app=express()
const dotenv=require("dotenv")
const route=require('./router/userRouter')
dotenv.config()
const PORT=5000


app.use(express.json())

app.use('/',route)



app.listen(PORT,()=>{
    console.log(`Server Running on port ${PORT}`)
})