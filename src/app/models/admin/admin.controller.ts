import type { Request, Response } from "express";
import { AdminService } from "./admin.services.js";

const CreateAdminController = async (req: Request, res: Response) => {
  try {
    const admin = await AdminService.CreateAdminService(req.body);
    res.status(201).json({
      success: true,
      massage: "Admin created successfully",
      data: admin
    });
  } catch (error) {
    console.log(error)
  }
}

export const AdminController = {
  CreateAdminController
}