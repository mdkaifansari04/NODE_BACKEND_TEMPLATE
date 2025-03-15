import { config } from 'dotenv';
config();
import { PORT } from './config/env';

import express from 'express';
import errorHandler from 'middleware/error';
import arcjetMiddleware from 'middleware/arcject.middleware';
import router from './api/v1/routes';
const app = express();
app.use(express.json());
app.use(arcjetMiddleware);

app.get('/', (req, res) => {
  res.send('Server is running');
});
app.use(router);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
