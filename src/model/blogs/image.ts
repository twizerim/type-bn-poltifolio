
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


export interface Iimage extends Document {
    id:string;
    category:string;
    image: string;
    likes: string[];
    dislikes: string[];
    comments:string[]
  }


const imagechema = new mongoose.Schema({
    id:{type:String},
    category:{type:String,required:true},
    image:{type:String,required:true},
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
imagechema.pre<IComment>(/^find/,function(next){
    this.populate({
        path:"comments",
        select:"names comment postAt"
    })
    next()
})
export default mongoose.model<Iimage>('Image', imagechema);