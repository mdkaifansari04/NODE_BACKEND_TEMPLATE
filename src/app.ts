// Import Winston for logging
import winston from 'winston';

// Configure Winston logger
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
    new winston.transports.File({ filename: 'logs/combined.log' }),
  ],
});

// Example usage of logger
logger.info('Application is starting...');
import { PORT } from './config/env';

import express from 'express';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import errorHandler from 'middleware/error';
import arcjetMiddleware from 'middleware/arcject.middleware';
import router from './api/v1/routes';
import cookieParser from 'cookie-parser';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(helmet());

// Apply rate limiting to all requests
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});
app.use(limiter);
app.use(arcjetMiddleware);

app.get('/', (req, res) => {
    logger.info('Received request for root endpoint');
    res.send('Server is running');
});

app.use((req, res, next) => {
    logger.warn(`Unhandled request: ${req.method} ${req.url}`);
    next();
});

import { Request, Response, NextFunction } from 'express';

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    logger.error(`Error occurred: ${err.message}`);
    res.status(500).send('Internal Server Error');
});
app.use(router);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
