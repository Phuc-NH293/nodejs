import Joi from "joi";

const createValidate = Joi.object({
    title: Joi.string().required().min(5).max(20).messages({
        "any.required": "Name trống!!!",
        "string.min": "Tiêu đề phải dài ít nhất 5 ký tự",
        "string.max": "Tiêu đề phải bé hơn 20 ký tự",
    }),
    description: Joi.string().required().messages({
        "any.required": "Mô tả trống!!!"
    }),
    image: Joi.string().required().min(5).max(20).messages({
        "any.required": "Địa chỉ trống!!!",
        "string.min": "Hình ảnh phải dài ít nhất 5 ký tự",
        "string.max": "Hình ảnh phải bé hơn 20 ký tự",
    }),
    price: Joi.number().required().messages({
        "any.required": "Giá trống!!!"
    }),
    quantity: Joi.number().required().messages({
        "any.required": "Số lượng trống!!!"
    }),
})
const updateValidate = Joi.object({
    title: Joi.string().required().min(5).max(20).messages({
        "any.required": "Name trống!!!",
        "string.min": "Tiêu đề phải dài ít nhất 5 ký tự",
        "string.max": "Tiêu đề phải bé hơn 20 ký tự",
    }),
    description: Joi.string().required().messages({
        "any.required": "Mô tả trống!!!"
    }),
    image: Joi.string().required().min(5).max(20).messages({
        "any.required": "Địa chỉ trống!!!",
        "string.min": "Hình ảnh phải dài ít nhất 5 ký tự",
        "string.max": "Hình ảnh phải bé hơn 20 ký tự",
    }),
    price: Joi.number().required().messages({
        "any.required": "Giá trống!!!"
    }),
    quantity: Joi.number().required().messages({
        "any.required": "Số lượng trống!!!"
    }),
})
export { createValidate, updateValidate }