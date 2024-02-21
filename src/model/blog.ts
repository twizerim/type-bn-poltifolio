
import mongoose from "mongoose";


const blogschema = new mongoose.Schema({
    blogTitle:{type:String,required:true},
    blogName:{type:String,required:true},
    blogDiscription:{type:String,required:true},
    blogImage:{type:String,required:true},
    likes:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"User"
        }
    ],
    dislikes:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"User"
        }
    ],
    postAt:{type:Date,default:new Date(Date.now())}
})
const Blogs=mongoose.model("Blogs",blogschema)
export {Blogs}