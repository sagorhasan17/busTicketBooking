import { Schema, model } from "mongoose";
import type { IAdmin } from "./admin.interface.js";

const adminSchema = new Schema<IAdmin>(
  {
    adminId: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ["admin"], default: "admin" },
    isActive: { type: Boolean, default: true }
  }
);

export const AdminModel = model<IAdmin>("Admin", adminSchema);
