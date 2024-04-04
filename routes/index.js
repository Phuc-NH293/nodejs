import { Router } from "express";
// import authRouter from "./auth";
import productsRouter from "./products";
import categorysRouter from "./category";
const router = Router();

router.use("/product",productsRouter)
router.use("/category",categorysRouter)
// router.use("/auth",authRouter)

export default router;