import { config } from 'dotenv';
config();
import { PORT } from './config/env';

import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('Server is running');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
