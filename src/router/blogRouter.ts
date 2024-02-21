
import express,{Router} from "express"
import { blogController } from "../controller/blogcontroller"


const router:Router=express.Router()
router.post("/post",blogController.postblogs)
router.get("/get",blogController.getblogs)
router.get("/get/:id",blogController.getOneblogs)
router.delete("/delete",blogController.deleteblogs)
router.delete("/delete/:id",blogController.deleteOneblogs)
router.patch("/update/:id",blogController.updateblogs)

export default router