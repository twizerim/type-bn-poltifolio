
import express,{Router} from "express"
import { contactController } from "../controller/contactcontroller"
import { DataCheckers } from "../validater/datachecker"
import VerifyAccess from "../validater/velifiyAccess"


const router:Router=express.Router()
router.post("/",DataCheckers.userRegistIsEmpty,contactController.sendmessage)
router.get("/",VerifyAccess("admin"),contactController.getmessage)
router.get("/:id",VerifyAccess("admin"),contactController.geteOnemessage)
router.delete("/",VerifyAccess("admin"),contactController.deletemessage)
router.delete("/:id",VerifyAccess("admin"),contactController.deleteOnemessage)

export default router