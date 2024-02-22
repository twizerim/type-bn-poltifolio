
import express,{Router} from "express"
import { blogController } from "../controller/blogcontroller"
// import upload from "../validater/multer"


const router:Router=express.Router()
router.post("/post",blogController.postblogs)
router.get("/get",blogController.getblogs)
router.get("/get/:id",blogController.getOneblogs)
router.delete("/delete",blogController.deleteblogs)
router.delete("/delete/:id",blogController.deleteOneblogs)
router.patch("/update/:id",blogController.updateblogs)
router.put("/like/:blogId",blogController.likes)
router.put("/dislikes/:blogId",blogController.dislikes)

export default router