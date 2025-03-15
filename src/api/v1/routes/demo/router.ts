import { demoController } from 'api/v1/controller';
import express from 'express';
const router = express.Router();

router.get('/', demoController.demo);

export default router;
