import mongoose, { Schema, Document, model } from 'mongoose';
interface IComment extends Document {
    user: string;
}

const CommentSchema = new Schema({
    commeterName:{type:String,required:true},
    comment:{type:String,required:true},
    postAt:{type:Date,default:new Date(Date.now())}
})
const Comment = model<IComment>('Comment', CommentSchema);

export default Comment;
