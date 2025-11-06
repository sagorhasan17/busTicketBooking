import type { Request, Response } from "express";
import { BusService } from "./bus.services.js";

const CreateBusController = async (req: Request, res: Response) => {
  try {
    const bus = await BusService.CreateBusService(req.body);
    res.status(201).json({
      success: true,
      massage: "bus added successfully",
      data: bus
    });
  } catch (error) {
    console.log(error)
  }
}

export const BusController = {
  CreateBusController
}