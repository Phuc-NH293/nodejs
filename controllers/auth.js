import User from "../models/UserModel";
import bcryptjs from "bcryptjs";
class AuthControler {
    async register(req, res) {
        try {
            // check email
            const {email, password}= req.body
            const checkEmail = User.findOne({email});
            if(checkEmail){
                return res.status(400).json({
                    message:"Email đã đăng ký rồi",
                })
            }
            const user = await User.create(req.body);
            return res.status(200).json({
                message: "Create done",
                data: user
            })
        } catch (error) {
            res.status(400).json({
                message: error.message,
            })
        }
    }
    async login(req, res) {
        try {
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
 
}
export default AuthControler;