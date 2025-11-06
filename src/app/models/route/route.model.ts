import { Schema, model } from "mongoose";
import type { IRoute } from "./route.interface.js";

const routeSchema = new Schema<IRoute>(
  {
    routeId: { type: String, required: true, unique: true },
    routeName: { type: String, required: true },
    startLocation: { type: String, required: true },
    endLocation: { type: String, required: true },
    distance: { type: Number },
    duration: { type: String },
    createdAt: {type: String},
    updatedAt: {type: String},
  }
);

export const RouteModel = model<IRoute>("Route", routeSchema);
