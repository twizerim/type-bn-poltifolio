
import express,{Router} from "express"
import { userController } from "../controller/usercontroller"
import { DataCheckers } from "../validater/datachecker"
import { Validation } from "../validater/validation"
import VerifyAccess from "../validater/velifiyAccess"



const router:Router=express.Router()
router.post("/create",DataCheckers.userRegistIsEmpty,DataCheckers.emailExist,Validation.userAccountRule(),
Validation.inputValidator,userController.createuser)
router.get("/get",userController.getusers)
router.get("/get/:id",userController.getOneUsers)
router.delete("/delete",VerifyAccess("admin"),userController.deleteusers)
router.delete("/delete/:id",VerifyAccess("admin"),userController.deleteOneUsers)
router.patch("/update/:id",VerifyAccess("admin"),DataCheckers.userRegistIsEmpty,userController.updateUsers)
router.post("/login",DataCheckers.userRegistIsEmpty,userController.Login)


export default router

