const mongoose=require('mongoose')

const contactSchema=mongoose.Schema(
    {
        name:String,
        email:{type: String, required: true},
        age:Number, 
        adress:String

    }
)
const contact=mongoose.model('contact',contactSchema)
module.exports=contact