const User = require("../db/User");
const jwt = require("jsonwebtoken");
JWT_SEC = process.env.SECRET_KEY;
const CryptoJS = require("crypto-js");

let cookieOptions = {
    maxAge: 20 * 60 * 1000, // would expire in 20minutes
    httpOnly: true, // The cookie is only accessible by the web server
    secure: true,
    sameSite: "None",
};

const register = async (req, res) => {
    username = req.body.username;
    password = req.body.password;
    const newUser = new User({
        username,
        password: CryptoJS.AES.encrypt(password, JWT_SEC).toString(),
    });
    //? check if we already have a user
    const existingUser = await User.findOne({ username });
    if (existingUser) {
        res.status(400).json({
            status: "failed",
            data: [],
            message:
                "It seems you already have an account, please log in instead.",
        });
    }
    try {
        const savedUser = await newUser.save();
        const { password, ...others } = savedUser;
        jwt.sign(username, JWT_SEC, (err, token) => {
            if (err) {
                res.status(500).json({
                    status: "error",
                    code: 500,
                    message: "Internal Server Error",
                    data: [err],
                });
            } else {
                res.status(201).json({
                    status: "success",
                    data: [others],
                    token: token,
                    message:
                        "Thank you for registering with us. Your account has been successfully created.",
                });
            }
        });
    } catch (error) {
        res.status(500).json({
            status: "error",
            code: 500,
            message: "Internal Server Error",
            error: error.message,
        });
    }
};

const login = async (req, res) => {
    try {
        const user = await User.findOne({ username: req.body.username });
        if (!user) {
            return res.status(401).send("Wrong password or username");
        }
        const originalPassword = CryptoJS.AES.decrypt(
            user.password,
            JWT_SEC
        ).toString(CryptoJS.enc.Utf8);

        const currentPassword = req.body.password;
        if (currentPassword !== originalPassword) {
            res.status(401).send("Wrong password or username");
        }
        const accessToken = jwt.sign(
            {
                id: req.body.username,
                // isAdmin: isAdmin,
            },
            JWT_SEC,
            {
                expiresIn: "1h",
            }
        );
        res.cookie("jwtToken", accessToken, cookieOptions);
        const { password, ...others } = user._doc;
        res.status(200).json({ info: others, token: accessToken });
    } catch (error) {
        res.status(500).json({ message: error });
    }
};

const logout = async (req, res) => {
    try {
        res.clearCookie("jwtToken", cookieOptions);
        res.status(200).send({ message: "Logged out successfully" });
    } catch (error) {
        res.status(500).send({ message: error });
    }
};

const test = (req, res) => {
    res.json("This route works");
};

module.exports = { register, login, test, logout };
