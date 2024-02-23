import { connectDB } from "./db";
export { app } from "./express";

process.on('uncaughtException', (error) => {
    console.log("error : ",error);
})

connectDB();
