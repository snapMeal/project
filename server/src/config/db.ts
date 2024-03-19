import mongoose from "mongoose";
mongoose.connection.on('connected', () => console.log('db is connected'));
mongoose.connection.on('disconnected', () => console.log('db is disconnected'));
export async function connectDB() {
  try {
    await mongoose.connect(process.env.DB_URI!, {
      serverSelectionTimeoutMS: Number(process.env.DB_CONNECTION_TIMEOUT)
    });
  }
  catch (error) {
    console.log(error);
  }
}