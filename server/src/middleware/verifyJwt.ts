import jwt from "jsonwebtoken";

function verifyToken(req, res, next) {
    // Get the JWT token from the request headers
    const token = req.headers["authorization"];

    // Check if token is provided
    if (!token) {
        return res.status(401).json({ error: "No token provided" });
    }

    // Verify the token
    jwt.verify(token, process.env.SECRET_KEY!, (err, decoded) => {
        if (err) {
            if (err.name === "TokenExpiredError") {
                return res.status(401).json({ error: "Token expired" });
            } else {
                return res.status(401).json({ error: "Invalid token" });
            }
        } else {
            // If token is valid, attach the decoded payload to the request object
            req.user = decoded;
            next();
        }
    });
}
