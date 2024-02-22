import express,{Router} from "express"
import { commentcontroller } from "../controller/commetController"

const router:Router=express.Router()
router.post("/:blogId",commentcontroller.postcomment)
router.get("/",commentcontroller.getcomment)
router.get("/:id",commentcontroller.getonecomment)
router.delete("/",commentcontroller.deletecomment)
router.delete("/:id",commentcontroller.deleteoncommet)


export default router