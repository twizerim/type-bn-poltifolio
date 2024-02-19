import express,{Router} from "express"
import userRouter from "../router/userRouter"
import messageRouter from "../router/messageRouter"


const router:Router=express.Router()
router.use("/user",userRouter)
router.use("/message",messageRouter)


export default router