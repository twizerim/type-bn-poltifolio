
import express,{Router} from "express"
import { contactController } from "../controller/contactcontroller"
import { DataCheckers } from "../validater/datachecker"
import VerifyAccess from "../validater/velifiyAccess"


const router:Router=express.Router()
router.post("/",VerifyAccess("user"),DataCheckers.userRegistIsEmpty,contactController.sendmessage)
router.get("/",contactController.getmessage)
router.get("/:id",contactController.geteOnemessage)
router.delete("/",contactController.deletemessage)
router.delete("/:id",contactController.deleteOnemessage)

export default router