import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const initMongoConnection = async () => {
  const mongoURI = process.env.MONGODB_URI || 'defaultMongoURIHere';
  try {
    await mongoose.connect(mongoURI);
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};

export default initMongoConnection;