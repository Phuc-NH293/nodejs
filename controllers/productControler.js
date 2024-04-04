// import bcryptjs from "bcryptjs";
import Product from "../models/ProductModel";
import { createValidate, updateValidate } from "../validations/validate";
import jwt from "jsonwebtoken";
class ProductControler {
    async getAllProduct(req, res) {
        try {
            const products = await Product.find().populate("category");
            return res.status(200).json({
                message: "get done",
                data: products
            })
        } catch (error) {
            res.status(400).json({
                message: error.message,
            })
        }
    }
    async getProductDetail(req, res) {
        try {
            const product = await Product.findById(req.params.id).populate("category");
            if (!product) {
                return res.status(404).json({
                    message: "Not found",
                })
            }
            return res.status(200).json({
                message: "get done",
                data: product
            })
        } catch (error) {
            res.status(400).json({
                message: error.message,
            })
        }
    }
    async createProduct(req, res) {
        try {
            // validation
            const { error } = createValidate.validate(req.body, {
                abortEarly: false,
            });
            const { title, description, image, price, quantity } = req.body;
            if (error) {
                const errors = error.details.map((err) => err.message);
                console.log(errors);
                return res.status(404).json({
                    message: errors,
                })
            }
            // end validate
            const product = await Product.create(req.body);
            return res.status(200).json({
                message: "get done",
                data: product
            })
        } catch (error) {
            res.status(400).json({
                message: error.message,
            })
        }
    }
    async updateProduct(req, res) {
        try {
            // validation
            const { error } = updateValidate.validate(req.body, {
                abortEarly: false,
            });
            const { title, description, image, price, quantity } = req.body;
            if (error) {
                const errors = error.details.map((err) => err.message);
                console.log(errors);
                return res.status(404).json({
                    message: errors,
                })
            }
            // end validate
            const product = await Product.findByIdAndUpdate(req.params.id, req.body);
            if (!product) {
                return res.status(404).json({
                    message: "Not found",
                })
            }
            const updateProduct = await Product.findById(req.params.id);
            res.status(200).json({
                message: "Update product sucseccfull",
                data: updateProduct,
            })
        } catch (error) {
            res.status(400).json({
                message: error.message,
            })
        }
    }
    async deleteProduct(req, res) {
        try {
            const product = await Product.findByIdAndDelete(req.params.id);
            if (!product) {
                return res.status(404).json({
                    message: "Not found",
                })
            }
            return res.status(200).json({
                message: "Delete done",
                data: product
            })
        } catch (error) {
            res.status(400).json({
                message: error.message,
            })
        }
    }
}
export default ProductControler;