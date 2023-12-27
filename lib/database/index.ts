import mongoose from "mongoose";
const MONGODB_URI = process.env.MONGODB_URI;
let cached = (global as any).mongoose || { conn: null, promise: null };

const connectDB = async () => {
  if (cached.conn) return cached.conn;
  if (!MONGODB_URI) return new Error("No MONGODB_URI found");

  cached.promise =
    cached.promise ||
    mongoose.connect(MONGODB_URI, {
      dbName: "event-hub",
      bufferCommands: false,
    });

  cached.conn = await cached.promise;

  return cached.conn;
};

export default connectDB;
