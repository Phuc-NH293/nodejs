import { Router } from "express";
import CategoryControler from "../controllers/categoryControler";

const categorysRouter = Router();
const categoryCon = new CategoryControler();

categorysRouter.get("/",categoryCon.getAllCategory)
categorysRouter.get("/:id",categoryCon.getCategoryDetail)
categorysRouter.post("/",categoryCon.createCategory)
categorysRouter.put("/:id",categoryCon.updateCategory)
categorysRouter.delete("/:id",categoryCon.deleteCategory)

export default categorysRouter;