import type { Request, Response } from "express";
import { BookingService } from "./booking.services.js";

const CreateBookingController = async (req: Request, res: Response) => {
  try {
    const booking = await BookingService.CreateBookingService(req.body);
    res.status(201).json({
      success: true,
      massage: "booking created successfully",
      data: booking
    });
  } catch (error) {
    console.log(error)
  }
}

export const BookingController = {
  CreateBookingController
}