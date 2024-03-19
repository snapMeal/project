import { findByField, findById, save } from "../../repo/user";
import { IUser } from "../../interface/user";
import { IUserService } from "./IUserService";
import { APIError } from "../../utils/errorHandler";
import { hashPassword, verifyPassword } from "../../utils/hashing";
import { generateToken } from "../../utils/token";

export const UserService: IUserService = {
    async login(payload: IUser) {
        const usersRec = await findByField("username", payload.username);
        if (usersRec.length != 0) {
            const isAuthorized = await verifyPassword(
                payload.password,
                usersRec[0].password
            );
            if (isAuthorized) {
                return generateToken(usersRec[0]._id.toString());
            } else {
                throw new APIError(
                    "username or password is wrong please check again",
                    400
                );
            }
        } else {
            throw new APIError("User not found", 404);
        }
    },
    async signup(payload: IUser) {
        payload.password = await hashPassword(payload.password);
        const user = await save(payload);
        return generateToken(user._id.toString());
    },
};
