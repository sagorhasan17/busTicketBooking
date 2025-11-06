import { Types } from "mongoose";

export interface IBooking {
  bookingId: string;
  userId: Types.ObjectId;          
  busId: Types.ObjectId;
  seatsBooked: number;
  journeyDate: Date;
  totalFare: number;
  paymentId?: Types.ObjectId;
  status: "pending" | "confirmed" | "cancelled";
  createdAt?: Date;
  updatedAt?: Date;
}
