
import express,{Request,Response} from "express"
import { errormessage } from "../../utils/errormessage"
import { successmessage } from "../../utils/successmessage"
import Folders,{ Folder } from "../../model/blogs/folders";
import cloudinary from "../../utils/cloud/cloudinary";


class DocumentController{

    public static async postdocuma(req:Request,res:Response):Promise<void>{

        try {
            const { category}: Folder = req.body;
            const document = req.file?.path || ""
            if(!req.file){
                return errormessage(res,404,'Please upload your document')
            }else{
                const result = await cloudinary.uploader.upload(req.file.path,{
                    folder:'Documents'
                })

                const newdocuma = await Folders.create({document:{
                    public_id: result.public_id,
                    url: result.secure_url,
                },category})
                if(!newdocuma){
                    return errormessage(res,404,'No document posted')
                }else{
                    return successmessage(res,201,'document successfuly posted',newdocuma)
                }
            }
            
        } catch (error) {
            console.log(error)
        }
    }

    public static async getdocuma(req:Request,res:Response):Promise<void>{
        const documa = await Folders.find()
        if(!documa){
            return errormessage(res,401,'no document found')
        }else{
            return successmessage(res,201,'all documents retrived',documa)
        }
    }

    public static async deletdocuma(req:Request,res:Response):Promise<void>{
        const documa = await Folders.deleteMany()
        if(!documa){
            return errormessage(res,401,'no document found')
        }else{
            return successmessage(res,201,'all documents deleted',documa)
        }
    }

}
export {DocumentController}