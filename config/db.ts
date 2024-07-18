import { config } from 'dotenv';
config();

import mongoose from 'mongoose';

const MONGO_URI = process.env.MONGO_URI || '';
export const connectToDB = async () => {
  try {
    const connect = await mongoose.connect(MONGO_URI);
    console.log('DB connected successfully : ', connect.connection.host);
  } catch (error) {
    console.log('DB Connection error :', error);
  }
};
