
import mongoose from "mongoose";


const contactschema=new mongoose.Schema({

    fullname:{type:String,required:true},
    email:{type:String,required:true},
    message:{type:String,required:true},
    sendAt:{type:Date,default:new Date(Date.now())}

})
const Contact=mongoose.model("Contact",contactschema)
export {Contact}