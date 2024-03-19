import jwt from "jsonwebtoken";

export function generateToken(id: string) {
    return jwt.sign({_id:id}, process.env.SECRET_KEY!,{
        expiresIn:process.env.TOKEN_EXPIRATION
    });
}
