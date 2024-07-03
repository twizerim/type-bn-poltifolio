import express, { Request, Response } from "express";
import blogsRoutes from "./router/blogRouter";
import userRoutes from './router/userRouter'
import { userController } from "./controller/usercontroller";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compression from "compression";
import cors from "cors";

const app = express();


app.use(cors({
    credentials: true,
}));
app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());


app.get("/", (req: Request, res: Response) => {
    res.status(200).send({ message: "Welcome to our first API" });
});

app.post("/", userController.createuser);
app.post("/login", userController.Login);
app.get("/", userController.getusers); 
app.get("/:id", userController.getOneUsers);
app.delete("/:id", userController.deleteOneUsers);

export default app;
