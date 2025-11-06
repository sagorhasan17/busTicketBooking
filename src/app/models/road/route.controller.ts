import type { Request, Response } from "express";
import { RouteService } from "./route.service.js";

const CreateRouteController = async (req: Request, res: Response) => {
  try {
    const route = await RouteService.CreateRouteService(req.body);
    res.status(201).json({
      success: true,
      massage: "route created successfully",
      data: route
    });
  } catch (error) {
    console.log(error)
  }
}

export const RouteController = {
  CreateRouteController
}