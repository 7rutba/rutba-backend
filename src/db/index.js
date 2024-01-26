import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`,
    );
    console.log(`\n mongodb Connected : ${connectionInstance.connection.host}`);
  } catch (error) {
    console.log("Error while connecting the DataBase", error);
    process.exit(1);
  }
};

export default connectDB;
