
import express,{Request,Response} from "express"
import { errormessage } from "../../utils/errormessage"
import { successmessage } from "../../utils/successmessage"
import Image,{Iimage} from "../../model/blogs/image"
import cloudinary from "../../utils/cloud/cloudinary";


class ImageController{

    public static async postImage(req:Request,res:Response):Promise<void>{

        try {
            const { category}: Iimage = req.body;
            const image = req.file?.path || ""

            if(!req.file){
                return errormessage(res,404,'Please upload your image')
            }else{
                const result = await cloudinary.uploader.upload(req.file.path,{
                    folder:'Images'
                })

                const newImage = await Image.create({image:{
                    public_id: result.public_id,
                    url: result.secure_url,
                },category})
                if(!newImage){
                    return errormessage(res,404,'No image posted')
                }else{
                    return successmessage(res,201,'image successfuly posted',newImage)
                }
            }
            
        } catch (error) {
            console.log(error)
        }
    }

    public static async getImages(req:Request,res:Response):Promise<void>{
        const images = await Image.find()
        if(!images){
            return errormessage(res,401,'no image found')
        }else{
            return successmessage(res,201,'all imagess retrived',images)
        }
    }

    public static async deletemages(req:Request,res:Response):Promise<void>{
        const images = await Image.deleteMany()
        if(!images){
            return errormessage(res,401,'no image found')
        }else{
            return successmessage(res,201,'all imagess deleted',images)
        }
    }

}
export {ImageController}