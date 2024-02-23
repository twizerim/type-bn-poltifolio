
import express,{Request,Response} from "express"
import  Blogs,{IBlog}  from "../model/blog"
import { errormessage } from "../utils/errormessage"
import { successmessage } from "../utils/successmessage"


        

class blogController{
    public static async postblogs(req:Request,res:Response):Promise<void>{


        // const blog = await Blogs.create(req.body)
        // if(!blog){
        //     return errormessage(res,401,'no blog posted')
        // }else{
        //     return successmessage(res,201,'blog posted',blog)
        // }
        try {

            const { blogName, blogTitle, blogDescription }: IBlog = req.body;
            const blogImage = req.file?.path || ""

            const newBlog: IBlog = new Blogs({ blogName, blogTitle, blogDescription, blogImage });
            const savedBlog: IBlog = await newBlog.save();
            return successmessage(res,201,'blog successfuly posted',savedBlog)
            
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



public static async likes(req: Request, res: Response): Promise<void> {
    try {
        const blogId = req.params.blogId;
        const blog = await Blogs.findById(blogId) as IBlog;
        if (!blog) {
            return errormessage(res, 401, 'No blog found');
        } else {
            const userId = req.user?.user.id||blogId;
            if (blog.likes.includes(userId)) {
                return errormessage(res, 401, 'You already liked this blog');
            } else {
                blog.likes.push(userId);
                await blog.save();
                successmessage(res, 200, 'Blog liked successfully', blog);
            }
        }
    } catch (error) {
        // Handle any unexpected errors
        console.error(error);
        return errormessage(res, 500, 'Internal Server Error');
    }
  }


  public static async dislikes(req: Request, res: Response): Promise<void> {
    try {
        const blogId = req.params.blogId;
        const blog = await Blogs.findById(blogId) as IBlog;
        if (!blog) {
            return errormessage(res, 401, 'No blog found');
        } else {
            const userId = req.user?.user.id||blogId;
            if (blog.dislikes.includes(userId)) {
                return errormessage(res, 401, 'You already liked this blog');
            } else {
                blog.dislikes.push(userId);
                await blog.save();
                successmessage(res, 200, 'Blog disliked successfully', blog);
            }
        }
    } catch (error) {
        console.error(error);
        return errormessage(res, 500, 'Internal Server Error');
    }
  }

} 
export {blogController}