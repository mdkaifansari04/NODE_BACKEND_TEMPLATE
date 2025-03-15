import { config } from 'dotenv';
config();
import { PORT } from './config/env';

import express from 'express';
import errorHandler from 'middleware/error';

const app = express();

app.get('/', (req, res) => {
  res.send('Server is running');
});

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
