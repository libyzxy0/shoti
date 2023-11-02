import mongoose from 'mongoose';

export default async () => {
  const config = useRuntimeConfig();
  const options = {
    dbName: config.dbName,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

  try {
    await mongoose.connect(config.dbUrl, options);
    console.log('Connected to mongodb...');
  } catch (err) {
    console.log('Error while connecting to mongodb:', err);
  }
};
