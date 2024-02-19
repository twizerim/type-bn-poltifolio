
import express,{Router} from "express"
import { userController } from "../controller/usercontroller"


const router:Router=express.Router()
router.post("/create",userController.createuser)


export default router

