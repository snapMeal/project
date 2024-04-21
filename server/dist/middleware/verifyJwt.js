"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyJwtOrAdmin = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
function verifyToken(req, res, next) {
    // Get the JWT token from the request headers
    const token = req.headers["authorization"];
    // Check if token is provided
    if (!token) {
        res.status(401).json({ error: "No token provided" });
        return;
    }
    // Verify the token
    jsonwebtoken_1.default.verify(token, process.env.SECRET_KEY, (err, decoded) => {
        if (err) {
            if (err.name === "TokenExpiredError") {
                res.status(401).json({ error: "Token expired" });
                return;
            }
            else {
                res.status(401).json({ error: "Invalid token" });
                return;
            }
        }
        else {
            // If token is valid, attach the decoded payload to the request object
            req.user = decoded;
            next();
        }
    });
}
const verifyJwtOrAdmin = (req, res, next) => {
    // Get the JWT token from the request headers
    const token = req.headers["authorization"];
    // Check if token is provided
    if (!token) {
        next();
        return;
    }
    // Verify the token
    jsonwebtoken_1.default.verify(token, process.env.SECRET_KEY, (err, decoded) => {
        if (err) {
            if (err.name === "TokenExpiredError") {
                res.status(401).json({ error: "Token expired" });
                return;
            }
            else {
                res.status(401).json({ error: "Invalid token" });
                return;
            }
        }
        else {
            // If token is valid, attach the decoded payload to the request object
            req.user = decoded;
            next();
        }
    });
};
exports.verifyJwtOrAdmin = verifyJwtOrAdmin;
exports.default = verifyToken;
