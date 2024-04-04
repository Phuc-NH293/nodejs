import Category from "../models/CategoryModel";

class CategoryControler {
    async getAllCategory(req, res) {
        try {
            const categorys = await Category.find();
            return res.status(200).json({
                message: "get done",
                data: categorys
            })
        } catch (error) {
            res.status(400).json({
                message: error.message,
            })
        }
    }
    async getCategoryDetail(req, res) {
        try {
            const category = await Category.findById(req.params.id);
            if (!category) {
                return res.status(404).json({
                    message: "Not found",
                })
            }
            return res.status(200).json({
                message: "get done",
                data: category
            })
        } catch (error) {
            res.status(400).json({
                message: error.message,
            })
        }
    }
    async createCategory(req, res) {
        try {
            
            const category = await Category.create(req.body);
            return res.status(200).json({
                message: "get done",
                data: category
            })
        } catch (error) {
            res.status(400).json({
                message: error.message,
            })
        }
    }
    async updateCategory(req, res) {
        try {
            const category = await Category.findByIdAndUpdate(req.params.id, req.body);
            if (!category) {
                return res.status(404).json({
                    message: "Not found",
                })
            }
            const updateCategory = await Category.findById(req.params.id);
            res.status(200).json({
                message: "Update category sucseccfull",
                data: updateCategory,
            })
        } catch (error) {
            res.status(400).json({
                message: error.message,
            })
        }
    }
    async deleteCategory(req, res) {
        try {
            const category = await Category.findByIdAndDelete(req.params.id);
            if (!category) {
                return res.status(404).json({
                    message: "Not found",
                })
            }
            return res.status(200).json({
                message: "Delete done",
                data: category
            })
        } catch (error) {
            res.status(400).json({
                message: error.message,
            })
        }
    }
}
export default CategoryControler;