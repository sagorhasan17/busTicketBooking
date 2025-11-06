import express from 'express';
import { BookingController } from './booking.controller.js';

const router = express.Router();

router.post('/user-booking', BookingController.CreateBookingController);

export const BookingRoutes = router;
