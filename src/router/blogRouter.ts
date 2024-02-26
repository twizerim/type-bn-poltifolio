
import express,{Router} from "express"
import { blogController } from "../controller/blogcontroller"
import VerifyAccess from "../validater/velifiyAccess"
import upload from "../validater/multer"


const router:Router=express.Router()
router.post("/post",upload.single("image"),blogController.postblogs)
router.get("/get",VerifyAccess("user"),blogController.getblogs)
router.get("/get/:id",VerifyAccess("user"),blogController.getOneblogs)
router.delete("/delete",VerifyAccess("admin"),blogController.deleteblogs)
router.delete("/delete/:id",VerifyAccess("admin"),blogController.deleteOneblogs)
router.patch("/update/:id",VerifyAccess("admin"),blogController.updateblogs)
router.put("/like/:blogId",VerifyAccess("user"),blogController.likes)
router.put("/dislikes/:blogId",VerifyAccess("user"),blogController.dislikes)

export default router