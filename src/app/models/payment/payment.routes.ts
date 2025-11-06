import express from 'express';
import { PaymentController } from './payment.controller.js';

const router = express.Router();

router.post('/user-payment', PaymentController.CreatePaymentController);

export const PaymentRoutes = router;
