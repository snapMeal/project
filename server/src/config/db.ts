import mongoose from "mongoose";
mongoose.connection.on('connected', () => console.log('db is connected'));
mongoose.connection.on('disconnected', () => console.log('db is disconnected'));
export async function connectDB() {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/test', {
      serverSelectionTimeoutMS: 5000
    });
  }
  catch (error) {
    console.log(error);
  }
}