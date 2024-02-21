import express,{Router} from "express"
import userRouter from "../router/userRouter"
import messageRouter from "../router/messageRouter"
import blogRouter from "../router/blogRouter"


const router:Router=express.Router()
router.use("/user",userRouter)
router.use("/message",messageRouter)
router.use("/blogs",blogRouter)


export default router