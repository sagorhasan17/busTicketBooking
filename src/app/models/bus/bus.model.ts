import { Schema, model, Types } from "mongoose";
import type { IBus } from "./bus.interface.js";

const busSchema = new Schema<IBus>(
  {
    busId: { type: String, required: true, unique: true },
    busName: { type: String, required: true },
    busNumber: { type: String, required: true, unique: true },
    route: { type: Schema.Types.ObjectId, ref: "Route", required: true },
    totalSeats: { type: Number, required: true },
    availableSeats: { type: Number, required: true },
    fare: { type: Number, required: true },
    departureTime: { type: Date, required: true },
    arrivalTime: { type: Date, required: true }
  }
);

export const BusModel = model<IBus>("Bus", busSchema);
