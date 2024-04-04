import mongoose, { Schema } from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
    category: {
      type: Schema.Types.ObjectId,
      ref: 'Category',
      require: true,
    }
  },
  { timestamps: true, versionKey: false }
);

const Product = mongoose.model("Product", ProductSchema);

export default Product;
