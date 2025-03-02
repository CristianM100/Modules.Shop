import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGO_URI || ''; 

if (!MONGODB_URI) {
  throw new Error('Please define the MONGO_URI environment variable inside .env.local');
}

const dbConnect = async () => {
  if (mongoose.connection.readyState >= 1) {
    return;
  }
  
  await mongoose.connect(MONGODB_URI);
};

export default dbConnect;



