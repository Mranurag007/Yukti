const User = require("../model/userSchema");
const business = require("../model/businessSchema");
const jwt = require("jsonwebtoken");
const findadddatabuis = async (req, res, next) => {
    try {
        const token = req.cookies.JWT_token;
        const verifyToken = jwt.verify(token, process.env.SECRET_KEY);
        const rootuser = await User.findOne({ _id: verifyToken._id });
        const rootuserdata = await business.find({ user_id: rootuser._id });
        if (!rootuser) { throw new Error("USer not FOUND"); }
        req.rootuserdata = rootuserdata;
        next();
    }
    catch (err) {
        res.status(401).send('Unauthorized no token');
        console.log(err);
    }
}
module.exports = findadddatabuis;