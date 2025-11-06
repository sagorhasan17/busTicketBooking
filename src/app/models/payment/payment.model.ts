import { Schema, model, Types } from "mongoose";
import type { IPayment } from "./payment.interface.js";

const paymentSchema = new Schema<IPayment>(
  {
    paymentId:{ type: String, required: true },
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    bookingId: { type: Schema.Types.ObjectId, ref: "Booking", required: true },
    amount: { type: Number, required: true },
    method: { type: String, required: true },
    transactionId: { type: String, required: true, unique: true },
    paymentStatus: { type: String, enum: ["pending", "success", "failed"], default: "pending" },
    paymentDate: { type: Date, required: true }
  }
);

export const PaymentModel = model<IPayment>("Payment", paymentSchema);
