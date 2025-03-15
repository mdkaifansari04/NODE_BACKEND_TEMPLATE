import { config } from 'dotenv';
import path from 'path';

// Resolve the correct .env file from the root directory
const envFile = path.resolve(
  process.cwd(),
  `.env.${process.env.NODE_ENV || 'development'}.local`,
);

config({ path: envFile });

export const { PORT, NODE_ENV, ARCJET_KEY } = process.env;
