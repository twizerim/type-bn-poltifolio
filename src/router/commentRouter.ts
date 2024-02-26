import express,{Router} from "express"
import { commentcontroller } from "../controller/commetController"
import VerifyAccess from "../validater/velifiyAccess"

const router:Router=express.Router()
router.post("/:blogId",VerifyAccess("user"),commentcontroller.postcomment)
router.get("/",commentcontroller.getcomment)
router.get("/:id",VerifyAccess("admin"),commentcontroller.getonecomment)
router.delete("/",VerifyAccess("admin"),commentcontroller.deletecomment)
router.delete("/:id",VerifyAccess("admin"),commentcontroller.deleteoncommet)


export default router