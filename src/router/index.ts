import express,{Router} from "express"
import userRouter from "../router/userRouter"
import messageRouter from "../router/messageRouter"
import blogRouter from "../router/blogRouter"
import commentRouter from "../router/commentRouter"


const router:Router=express.Router()
router.use("/user",userRouter)
router.use("/message",messageRouter)
router.use("/blogs",blogRouter)
router.use("/comment",commentRouter)


export default router