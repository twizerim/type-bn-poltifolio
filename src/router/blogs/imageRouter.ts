
import express,{Router} from "express"
import upload from "../../validater/blogs/imagemulter"
import { ImageController } from "../../controller/blogcontroller/imagecontroller"


const router:Router=express.Router()
router.post("/post",upload.single("image"),ImageController.postImage)
router.get("/get",ImageController.getImages)

export default router