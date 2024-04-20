import jwt from "jsonwebtoken";

function verifyToken(req, res, next) {
    // Get the JWT token from the request headers
    const token = req.headers["authorization"];
    console.log("HEH" ,req.headers)

    // Check if token is provided
    if (!token) {
        res.status(401).json({ error: "No token provided" });
        return;
    }

    // Verify the token
    jwt.verify(token, process.env.SECRET_KEY!, (err, decoded) => {
        if (err) {
            if (err.name === "TokenExpiredError") {
                res.status(401).json({ error: "Token expired" });
                return;
            } else {
                res.status(401).json({ error: "Invalid token" });
                return;
            }
        } else {
            // If token is valid, attach the decoded payload to the request object
            req.user = decoded;
            next();
        }
    });
}

export default verifyToken;