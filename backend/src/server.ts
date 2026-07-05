import app from './app.js';
import { connectDB } from './config/db.js';
import { env } from './config/env.js';

const startServer = async (): Promise<void> => {
  try {
    await connectDB();

    app.listen(env.port, () => {
      console.log(`Server running in ${env.nodeEnv} mode on port ${env.port}`);
    });
  } catch (error) {
    if (error instanceof Error) {
      console.error('Failed to start server:', error.message);
    } else {
      console.error('Failed to start server:', error);
    }
    process.exit(1);
  }
};

startServer();
