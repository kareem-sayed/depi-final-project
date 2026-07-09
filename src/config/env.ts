import dotenv from 'dotenv';

dotenv.config();

export const env = {
  nodeEnv: process.env.NODE_ENV || 'development',
  port: Number(process.env.PORT) || 3000,
  mongoUri: process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/depi_project',
  jwtSecret: process.env.JWT_SECRET || 'change_this_secret',
  clientUrl: process.env.CLIENT_URL || 'http://localhost:5173,https://backenddepi-production.up.railway.app'
};
