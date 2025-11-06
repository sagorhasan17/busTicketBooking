import { Schema, model, Types } from "mongoose";
import type { IBooking } from "./booking.interface.js";

const bookingSchema = new Schema<IBooking>(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    busId: { type: Schema.Types.ObjectId, ref: "Bus", required: true },
    seatsBooked: { type: Number, required: true },
    journeyDate: { type: Date, required: true },
    totalFare: { type: Number, required: true },
    paymentId: { type: Types.ObjectId, ref: "Payment" },
    status: { type: String, enum: ["pending", "confirmed", "cancelled"], default: "pending" }
  }
);

export const BookingModel = model<IBooking>("Booking", bookingSchema);
