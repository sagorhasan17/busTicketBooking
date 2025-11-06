import express from 'express';
import { BusController } from './bus.controller.js';

const router = express.Router();

router.post('/create-bus', BusController.CreateBusController);

export const BusRoutes = router;
