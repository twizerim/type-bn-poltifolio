import express,{Router} from "express"
import { commentcontroller } from "../controller/commetController"
import VerifyAccess from "../validater/velifiyAccess"

const router:Router=express.Router()
router.post("/:blogId",VerifyAccess("user"),commentcontroller.postcomment)
router.get("/",commentcontroller.getcomment)
router.get("/:id",commentcontroller.getonecomment)
router.delete("/",commentcontroller.deletecomment)
router.delete("/:id",commentcontroller.deleteoncommet)


export default router