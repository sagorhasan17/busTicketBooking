import { Types } from "mongoose";


export interface IPayment {
  paymentId: string;
  userId: Types.ObjectId;
  bookingId: Types.ObjectId;
  amount: number;
  method: string;
  transactionId: string;
  paymentStatus: "pending" | "success" | "failed";
  paymentDate: Date;
  createdAt?: Date;
  updatedAt?: Date;
}
