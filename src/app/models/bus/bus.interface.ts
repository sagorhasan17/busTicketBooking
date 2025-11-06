// bus.interface.ts
import { Types } from "mongoose";

export interface IBus {
    busId: string;
    busName: string;
    busNumber: string;
    route: Types.ObjectId;
    totalSeats: number;
    availableSeats: number;
    fare: number;
    departureTime: Date;
    arrivalTime: Date;
    createdAt?: Date;
    updatedAt?: Date;
}
