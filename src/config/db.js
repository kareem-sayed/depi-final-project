import mongoose from 'mongoose';
import { env } from './env.js';

export const connectDB = async () => {
  mongoose.set('strictQuery', true);

  const connection = await mongoose.connect(env.mongoUri);
  console.log(`MongoDB connected: ${connection.connection.host}`);
};
