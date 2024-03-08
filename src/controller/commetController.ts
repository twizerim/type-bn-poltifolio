import express,{Request,Response} from "express"
import Comment from "../model/comment"
import  Blogs,{IBlog}  from "../model/blog"
import { errormessage } from "../utils/errormessage"
import { successmessage } from "../utils/successmessage"


class commentcontroller{

    public static async postcomment(req:Request,res:Response):Promise<void>{
          try {
            const blogId=req.params.blogId
            req.body.user=req.user?.user.id
            const comment = await Comment.create(req.body.user)
            const blog = await Blogs.findByIdAndUpdate(blogId,{$push:{comments:comment}},{new:true})
            if(!blog){
                return errormessage(res,401,`no blog found on this id ${blogId}`)
            }else{
                return successmessage(res,201,'comment successfuly posted',blog) 
            }
            
          } catch (error) {
             return errormessage(res,500,`${error}`)
          }
    }

    public static async getcomment(req:Request,res:Response):Promise<void>{

        const comment = await Comment.find()
        if(!comment){
            return errormessage(res,401,'no comment found')
        }else{
            return successmessage(res,201,'comments retrived',comment)
        }
    }
    public static async deletecomment(req:Request,res:Response):Promise<void>{
        const comment = await Comment.deleteMany()
        if(!comment){
            return errormessage(res,401,'no comment found')
        }else{
            return successmessage(res,201,'comments deleted',null)
        }
         
    }

    public static async getonecomment(req:Request,res:Response):Promise<void>{
        const id=req.params.id
        const comment = await Comment.findById(id)
        if(!comment){
            return errormessage(res,401,'no comment found')
        }else{
            return successmessage(res,201,'comments retrived',comment)
        }
         
    }

    public static async deleteoncommet(req:Request,res:Response):Promise<void>{
        const id=req.params.id
        const comment = await Comment.findByIdAndDelete(id)
        if(!comment){
            return errormessage(res,401,'no comment found')
        }else{
            return successmessage(res,201,'comments deleted',null)
        }
         
    }

}
export {commentcontroller}