const jwtToken = require("jsonwebtoken");

const JWT_SECRET = process.env.JWT_SECRET_KEY;
// const User = require("../models/userModel");

const authMiddleware = async (req, res, next) => {
  try {
    const token =
      req.headers.authorization && req.headers.authorization.split(" ")[1];
    if (!token) {
      return res.status(401).json({ error: "Unauthorized" });
    }
    // Verify the JWT token
    const decodedToken = jwt.verify(token, SECRET_KEY);
    // Find the user by id
    const user = await User.findById(decodedToken.userId);
    if (!user) {
      return res.status(401).json({ error: "Unauthorized" });
    }
    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json({ error: "Unauthorized" });
  }
};
