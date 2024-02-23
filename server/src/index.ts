import dotEnv from "dotenv"
dotEnv.config();
import { app } from "./config"

app.listen(process.env.PORT,()=>{
    console.log(`app running on port ${process.env.PORT}`)
})