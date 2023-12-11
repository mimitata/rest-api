const express=require('express')
const app=express()
const dotenv=require('dotenv')
const mongoose=require('mongoose')
dotenv.config()
mongoose.connect( process.env.mongo_uri).then(()=>console.log('DB connected'))



const port = process.env.PORT || 3000


app.listen(port,()=>console.log("lestening on port",port))