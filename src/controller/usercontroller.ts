
import express,{Request,Response} from 'express'
import { User } from '../model/user'
import { errormessage } from '../utils/errormessage'
import { successmessage } from '../utils/successmessage'
import bcrypt from "bcrypt"



class userController{
    public static async createuser(req:Request,res:Response):Promise<void>{
        const {firstname,lastname,phone,email,password,confrimpassword,role}=req.body
           if(req.body.password !== req.body.confrimpassword){
              return errormessage(res,401," please password and confrim password miss macth")
           }else{
               const hashpassword=bcrypt.hashSync(req.body.password,10)

               const user = await User.create({firstname,lastname,phone,email,password:hashpassword,confrimpassword,role})
               if(!user){
                  return errormessage(res,401,"no user found")
               }else{
                 return successmessage(res,201,"user successfuly created",user)
               }
           }  
    }
}

export {userController}