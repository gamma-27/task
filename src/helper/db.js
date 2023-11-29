import mongoose from "mongoose";
import { User } from "../models/user";
export const connectDb = async () => {
  try {
   
    const { connection } = await mongoose.connect(process.env.MONGO_DB_URL);

    console.log("db connected hogya me...");
    

    console.log("user is created");

    console.log("connected with host ", connection.host);
  } catch (error) {
    console.log("failed  to connect with database");
    console.log(error);
  }
};
