const express=require('express')
const route=express.Router()
const {getcontact, } =require('')

route.get('/', getcontact)


module.exports=route
