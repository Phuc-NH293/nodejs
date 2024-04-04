import jwt from "jsonwebtoken";

const checkPermisson = (req, res) => {
    try {
        const token = req.headers.authorization?.split(" ")[1];
        if (!token) {
            return res.status(401).json({
                message: 'Không tìm thấy token',
            })
        }
        const data = jwt.verify(token, process.env.SECRECT_KEY)
        if (!data) {
            return res.status(401).json({
                message: "Not Author",
            })
        }

    } catch (error) {
        return res.status(400).json({
            message: error.message,
        })
    }
}
export { checkPermisson }