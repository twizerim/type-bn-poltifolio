
import express,{Router} from "express"
import { userController } from "../controller/usercontroller"
import { DataCheckers } from "../validater/datachecker"


const router:Router=express.Router()
router.post("/create",DataCheckers.userRegistIsEmpty,DataCheckers.emailExist,userController.createuser)
router.get("/get",userController.getusers)
router.get("/get/:id",userController.getOneUsers)
router.delete("/delete",userController.deleteusers)
router.delete("/delete/:id",userController.deleteOneUsers)
router.patch("/update/:id",DataCheckers.userRegistIsEmpty,userController.updateUsers)
router.post("/login",DataCheckers.userRegistIsEmpty,userController.Login)


export default router

