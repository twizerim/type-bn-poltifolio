import mongoose, { Schema, Document, model } from 'mongoose';
interface IComment extends Document {
    user: string;
}

const CommentSchema = new Schema({
    user:{type:mongoose.Schema.Types.ObjectId,ref:"User"},
    comment:{type:String,required:true},
    postAt:{type:Date,default:new Date(Date.now())}
});

CommentSchema.pre<IComment>(/^find/, function (next) {
    this.populate({
        path: 'user',
        select: 'firstname lastname email',
    });
    next();
});

const Comment = model<IComment>('Comment', CommentSchema);

export default Comment;
