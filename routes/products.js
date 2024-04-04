import { Router } from "express";
import ProductControler from "../controllers/productControler";
// import { checkPermisson } from "../middlewares/checkPermission";

const productsRouter = Router();
const productCon = new ProductControler();

productsRouter.get("/",productCon.getAllProduct)
productsRouter.get("/:id",productCon.getProductDetail)
productsRouter.post("/",productCon.createProduct)
productsRouter.put("/:id",productCon.updateProduct)
productsRouter.delete("/:id",productCon.deleteProduct)

export default productsRouter;