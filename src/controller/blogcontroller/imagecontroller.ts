
import express,{Request,Response} from "express"
import { errormessage } from "../../utils/errormessage"
import { successmessage } from "../../utils/successmessage"
import Image,{Iimage} from "../../model/blogs/image"


class ImageController{

    public static async postImage(req:Request,res:Response):Promise<void>{

        try {
            const { category}: Iimage = req.body;
            const image = req.file?.path || ""

            const newImage: Iimage = new Image({ category, image });
            const savedImage: Iimage = await newImage.save();
            return successmessage(res,201,'image successfuly posted',savedImage)
            
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

}
export {ImageController}