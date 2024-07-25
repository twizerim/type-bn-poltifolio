
import express,{Router} from "express"
import uploaddocuma from "../../validater/blogs/foldersmulter"
import { DocumentController } from "../../controller/blogcontroller/documacontroller"


const router:Router=express.Router()
router.post("/post",uploaddocuma.single("documa"),DocumentController.postdocuma)
router.get("/get",DocumentController.getdocuma)
router.delete("/delete",DocumentController.deletdocuma)

export default router