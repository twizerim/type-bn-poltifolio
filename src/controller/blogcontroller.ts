
import express,{Request,Response} from "express"
import { Blogs } from "../model/blog"
import { errormessage } from "../utils/errormessage"
import { successmessage } from "../utils/successmessage"


        

class blogController{
    public static async postblogs(req:Request,res:Response):Promise<void>{
        try {

            const blog= await Blogs.create(req.body)
            if(!blog){
                return errormessage(res,401,"blog not posted")
            }else{
                return successmessage(res,201,"success post blog",blog)
            }
            
        } catch (error) {
            console.log(error)
        }
    }

    public static async getblogs(req:Request,res:Response):Promise<void>{
        const blog = await Blogs.find()
        if(!blog){
            return errormessage(res,401,'no blog found')
        }else{
            return successmessage(res,201,'all blogs retrived',blog)
        }
    }

    public static async deleteblogs(req:Request,res:Response):Promise<void>{
        const blog = await Blogs.deleteMany()
        if(!blog){
            return errormessage(res,401,'no blog found')
        }else{
            return successmessage(res,201,'all blogs deleted',null)
        }
    }

    public static async getOneblogs(req:Request,res:Response):Promise<void>{
        const id=req.params.id
        const blog = await Blogs.findById(id)
        if(!blog){
            return errormessage(res,401,'no blog found')
        }else{
            return successmessage(res,201,' blogs retrived',blog)
        }
    }

    public static async deleteOneblogs(req:Request,res:Response):Promise<void>{
        const id=req.params.id
        const blog = await Blogs.findByIdAndDelete(id)
        if(!blog){
            return errormessage(res,401,'no blog found')
        }else{
            return successmessage(res,201,' blogs deleted',null)
        }
    }

    public static async updateblogs(req:Request,res:Response):Promise<void>{
        const id=req.params.id
        const blog = await Blogs.findByIdAndUpdate(id,req.body,{new:true})
        if(!blog){
            return errormessage(res,401,'no blog found')
        }else{
            return successmessage(res,201,' blogs updated',blog)
        }
    }

} 
export {blogController}