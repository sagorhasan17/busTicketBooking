import { Types } from "mongoose";

export interface IAdmin {
  adminId: string
  name: string;
  email: string;
  phone: string;
  password: string;
  role: "admin";
  isActive: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}
