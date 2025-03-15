import express from 'express';
const router = express.Router();
import demoRouter from './router';

router.use('/demo', demoRouter);

export default router;
