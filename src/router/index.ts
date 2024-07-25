import express,{Router} from "express"
import userRouter from "../router/userRouter"
import messageRouter from "../router/messageRouter"
import blogRouter from "../router/blogRouter"
import commentRouter from "../router/commentRouter"
import imageRouter from "../router/blogs/imageRouter"
import docomaRouter from "../router/blogs/documaRouter"


const router:Router=express.Router()
router.use("/user",userRouter)
router.use("/message",messageRouter)
router.use("/blogs",blogRouter)
router.use("/comment",commentRouter)

// ----------------------------------------------------------------------------
router.use("/imageuploaded",imageRouter)
router.use("/documaupload",docomaRouter)


export  default router