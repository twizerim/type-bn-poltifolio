import mongoose, { Schema, Document, model } from 'mongoose';
interface IComment extends Document {
    user: string;
}

const CommentSchema = new Schema({
    user:{type:mongoose.Schema.Types.ObjectId,ref:"User"},
    comment:{type:String,required:true},
    postAt:{type:Date,default:new Date(Date.now())}
})
const Comment = model<IComment>('Comment', CommentSchema);

export default Comment;
