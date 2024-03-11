import mongoose, { Schema, Document,PopulatedDoc, model } from 'mongoose';

interface User {
    _id: string;
    firstName: string;
}
interface IComment extends Document {
    user: PopulatedDoc<User & Document>;
}

const CommentSchema = new Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    names:{type:String,required:true},
    comment:{type:String,required:true},
    postAt:{type:Date,default:new Date(Date.now())}
})
CommentSchema.pre<IComment>(/^find/,function(next){
    this.populate({
        path:"user",
        select:"firstName "
    })
    next()
})
const Comment = model<IComment>('Comment', CommentSchema);

export default Comment;
