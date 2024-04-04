import { Router } from "express";
import AuthControler from "../controllers/auth";
const authRouter = Router();
const authControler = new AuthControler()

authRouter.post("/register",authControler.register)
authRouter.post("/login",authControler.login)


export  default authRouter;