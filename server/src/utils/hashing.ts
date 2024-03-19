import bcrypt from "bcrypt";

export async function hashPassword(password: string): Promise<string> {
    const data = await bcrypt.hash(password, 10);
    return data;
}

export async function verifyPassword(
    password: string,
    hashedPassword: string
): Promise<boolean> {
    return await bcrypt.compare(password, hashedPassword);
}
