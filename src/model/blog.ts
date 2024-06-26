
import mongoose,{Schema,PopulatedDoc,Document} from "mongoose";

interface Comment {
    _id: string;
    names: string;
    comment:string;
    postAt:Date

}
interface IComment extends Document {
    comment: PopulatedDoc<Comment & Document>;
}


export interface IBlog extends Document {
    id:string;
    blogName: string;
    blogTitle: string;
    blogDescription: string;
    blogImage: string;
    likes: string[];
    dislikes: string[];
    comments:string[]
  }


const blogschema = new mongoose.Schema({
    id:{type:String},
    blogTitle:{type:String,required:true},
    blogName:{type:String,required:true},
    blogDescription:{type:String,required:true},
    blogImage:{type:String,required:true},
    comments:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Comment"  
        }
    ],
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
blogschema.pre<IComment>(/^find/,function(next){
    this.populate({
        path:"comments",
        select:"names comment postAt"
    })
    next()
})
export default mongoose.model<IBlog>('Blogs', blogschema);