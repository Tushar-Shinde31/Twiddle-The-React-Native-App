import mongoose from "mongoose";
import { ENV } from './env.js';

export const connectDB = async () => {
    try{
        await mongoose.connect(ENV.MONGO_URI)
        console.log("Connected to DB SUCCESFULLY")
    }catch (error){
        console.log("Error conneting to MONGODB");
        process.exit(1)
    }
};