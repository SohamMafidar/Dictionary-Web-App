const jwt = require("jsonwebtoken");
const verifyToken = (req, res, next) => {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
    if (!token) {
        return res.status(401).json({ error: "Not authenticated" });
    }
    jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
        if (err) return res.status(404).json(err);
        req.user = user;
        next();
    });
};

//? Will be used in future if I go forward with Admin functionality. Will be used for authorizationxz
const verifyTokenAndAuthorization = (req, res, next) => {
    verifyToken(req, res, () => {
        if (req.user.id === req.body.id || req.user.isAdmin) {
            next();
        } else {
            return res.status(403).json("You are not allowed 🤬");
        }
    });
};

module.exports = verifyToken;
