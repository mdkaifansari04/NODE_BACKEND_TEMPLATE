import express from 'express';
const router = express.Router();
import demoRouter from './demo/router';

router.use('/demo', demoRouter);

export default router;
