import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.example' });

const initMongoConnection = async () => {
  try {
    const MONGODB_URL = process.env.MONGODB_URL;

    console.log('MONGODB_URL:', MONGODB_URL);
    console.log('DB User:', process.env.MONGODB_USER);
    console.log('DB Password:', process.env.MONGODB_PASSWORD);
    console.log('DB Name:', process.env.MONGODB_DB);

    if (!MONGODB_URL) throw new Error("MONGODB_URL is not defined in .env.example file");

    await mongoose.connect(MONGODB_URL, {
      user: process.env.MONGODB_USER,
      pass: process.env.MONGODB_PASSWORD,
      dbName: process.env.MONGODB_DB,
    });

    console.log('Successfully connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    process.exit(1);
  }
};

export default initMongoConnection;