
import express,{Request,Response} from "express"
import { Contact } from "../model/contact"
import { errormessage } from "../utils/errormessage"
import { successmessage } from "../utils/successmessage"



class contactController{

    public static async sendmessage(req:Request,res:Response):Promise<void>{
        try {
            const message=await Contact.create(req.body)
            if(!message){
                return errormessage(res,401,'message not sent')
            }else{
                return successmessage(res,201,'message sent',message)
            }
            
        } catch (error) {
            console.log(error)
        }
    }

    public static async getmessage(req:Request,res:Response):Promise<void>{
         try {
            const message=await Contact.find()
            if(!message){
                return errormessage(res,401,'no message found')
            }else{
                return successmessage(res,201,`all ${message.length} retrived`,message)
            }
            
         } catch (error) {
            console.log(error)
         }
    }

    public static async deletemessage(req:Request,res:Response):Promise<void>{
        try {
           const message=await Contact.deleteMany()
           if(!message){
               return errormessage(res,401,'no message found')
           }else{
               return successmessage(res,201,`all  deleted`,null)
           }
           
        } catch (error) {
            console.log(error)
        }
   }

   public static async geteOnemessage(req:Request,res:Response):Promise<void>{
      const id=req.params.id
    try {
       const message=await Contact.findById(id)
       if(!message){
           return errormessage(res,401,'no message found')
       }else{
           return successmessage(res,201,`message on this id ${id} retrived`,message)
       }
       
    } catch (error) {
        console.log(error)
    }
}

public static async deleteOnemessage(req:Request,res:Response):Promise<void>{
    const id=req.params.id
  try {
     const message=await Contact.findByIdAndDelete(id)
     if(!message){
         return errormessage(res,401,'no message found')
     }else{
         return successmessage(res,201,`message on this id ${id} deleted`,null)
     }
     
  } catch (error) {
      console.log(error)
  }
}

}
export {contactController}