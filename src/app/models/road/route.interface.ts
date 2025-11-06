import { Types } from "mongoose";

export interface IRoute {
  routeId: string;
  routeName: string;
  startLocation: string;
  endLocation: string;
  distance?: number;
  duration?: string;
  createdAt?: Date;
  updatedAt?: Date;
}
